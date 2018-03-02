import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      cats: []
    };
  }

  componentDidMount = () => {
    this.fetchCats();
  };

  fetchCats = async () => {
    try {
      const { data: { images } } = await axios.get('/cats.json'); // http://es6-features.org/#ObjectMatchingDeepMatching
      const selectedCats = await _.chain(images) // https://lodash.com/docs
        .shuffle()
        .take(2)
        .value();
      return this.setState({
        loading: false,
        cats: this.state.cats.push(...selectedCats) // http://es6-features.org/#SpreadOperator
      });
    } catch ({ response }) {
      return this.setState({
        loading: false,
        error: true
      });
    }
  };
  render() {
    return <div>home</div>;
  }
}

export default Home;
