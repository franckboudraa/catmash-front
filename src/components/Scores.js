import React, { Component } from 'react';
import axios from 'axios';

import ScoresLoader from './Scores/ScoresLoader';
import ErrorMessage from './Shared/ErrorMessage';
import ScoresList from './Scores/ScoresList';

import { Button } from 'semantic-ui-react';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      cats: [],
      sortByAsc: false
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

  toggleSort = () => {
    return this.setState(prevState => ({
      sortByAsc: !this.state.sortByAsc
    }));
  };

  render() {
    const { loading, error, cats, sortByAsc } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <Button.Group size="mini" className="mb-2">
          <Button negative={sortByAsc} onClick={this.toggleSort}>
            Ascending
          </Button>
          <Button.Or />
          <Button negative={!sortByAsc} onClick={this.toggleSort}>
            Descending
          </Button>
        </Button.Group>
        {loading ? <ScoresLoader /> : null}
        {error ? <ErrorMessage /> : null}
        {!loading && !error ? (
          <ScoresList cats={cats} sortByAsc={sortByAsc} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Scores;
