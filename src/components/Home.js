import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import ErrorMessage from './Arena/ErrorMessage';
import CatList from './Arena/CatList';

import { Loader } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      cats: [],
      swipeAnimation: false,
      winnerId: 0,
      looserId: 0
    };
  }

  componentDidMount = () => {
    this.pullCats();
  };

  pullCats = async () => {
    try {
      const { data: { images } } = await axios.get(
        `${this.props.apiURL}/cats.json`
      );
      const selectedCats = await _.chain(images) // https://lodash.com/docs
        .shuffle() // Shuffle the array of cats
        .take(2) // Take the first 2 cats
        .value(); // Return result
      return this.setState(prevState => ({
        cats: [...selectedCats],
        loading: false
      }));
    } catch ({ error }) {
      return this.setState({
        error: true,
        loading: false
      });
    }
  };

  voteForCat = winnerId => {
    const { cats } = this.state;
    const looserId = cats['0'].id === winnerId ? cats['1'].id : cats['0'].id;

    try {
      axios.post(`${this.props.apiURL}/new`, {
        winnerId,
        looserId
      });
    } catch ({ error }) {
      return this.setState({
        error: true,
        loading: false
      });
    }
    this.setState({
      swipeAnimation: true,
      winnerId
    });
    setTimeout(
      // Wait for css animation to finish before pulling new cats
      function() {
        this.setState({
          loading: true,
          swipeAnimation: false,
          cats: [],
          winnerId: 0
        });
        this.pullCats();
      }.bind(this),
      600
    );
  };

  render() {
    const { loading, error, cats, swipeAnimation, winnerId } = this.state;
    return (
      <div>
        {loading ? <Loader active inline /> : null}
        {error ? <ErrorMessage /> : null}
        {!loading && !error ? (
          <CatList
            {...{ cats, swipeAnimation, winnerId }}
            voteForCat={this.voteForCat}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Home;
