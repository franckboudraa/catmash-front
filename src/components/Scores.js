import React, { Component } from 'react';

import ErrorMessage from './Shared/ErrorMessage';
import ScoresList from './Scores/ScoresList';

import { Loader } from 'semantic-ui-react';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false
    };
  }

  componentDidMount = () => {
    //this.pullScores();
  };

  //pullScores = () => {};

  render() {
    const { loading, error } = this.state;
    return (
      <div>
        {loading ? <Loader active inline="centered" /> : null}
        {error ? <ErrorMessage /> : null}
        {!loading && !error ? <ScoresList /> : ''}
      </div>
    );
  }
}

export default Scores;
