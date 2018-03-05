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
      selectedCat: 0
    };
  }

  componentDidMount = () => {
    this.pullCats();
  };

  pullCats = async () => {
    try {
      const { data: { images } } = await axios.get('/cats.json'); // http://es6-features.org/#ObjectMatchingDeepMatching
      const selectedCats = await _.chain(images) // https://lodash.com/docs
        .shuffle() // Shuffle the array of cats
        .take(2) // Take the first 2 cats
        .value(); // Return result
      return this.setState(prevState => ({
        cats: [...selectedCats], // http://es6-features.org/#SpreadOperator
        loading: false
      }));
    } catch ({ response }) {
      return this.setState({
        error: true,
        loading: false
      });
    }
  };

  renderError = () => {
    return <ErrorMessage />;
  };

  voteForCat = id => {
    this.setState({
      swipeAnimation: true,
      selectedCat: id
    });
    setTimeout(
      // Wait for css animation to finish before pulling new cats
      function() {
        this.setState({
          loading: true,
          swipeAnimation: false,
          cats: [],
          selectedCat: 0
        });
        this.pullCats();
      }.bind(this),
      600
    );
  };

  renderCats = (cats, swipeAnimation, selectedCat) => {
    return (
      <CatList
        {...{ cats, swipeAnimation, selectedCat }}
        voteForCat={this.voteForCat}
      />
    );
  };
  render() {
    const { loading, error, cats, swipeAnimation, selectedCat } = this.state;
    return (
      <div>
        {loading ? <Loader active inline /> : null}
        {error ? this.renderError() : null}
        {!loading && !error
          ? this.renderCats(cats, swipeAnimation, selectedCat)
          : null}
      </div>
    );
  }
}

export default Home;
