import React, { Component } from 'react';
import axios from 'axios';

import ScoresLoader from './Scores/ScoresLoader';
import ErrorMessage from './Shared/ErrorMessage';
import ScoresList from './Scores/ScoresList';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      cats: []
    };
  }

  componentDidMount = () => {
    this.pullScores();
  };

  pullScores = async () => {
    try {
      const { data } = await axios.get(`${this.props.apiURL}/scores`);
      return this.setState(prevState => ({
        cats: [...data],
        loading: false
      }));
    } catch ({ error }) {
      return this.setState({
        error: true,
        loading: false
      });
    }
  };

  render() {
    const { loading, error, cats } = this.state;
    return (
      <div>
        {loading ? <ScoresLoader /> : null}
        {error ? <ErrorMessage /> : null}
        {!loading && !error ? <ScoresList {...cats} /> : ''}
      </div>
    );
  }
}

export default Scores;
