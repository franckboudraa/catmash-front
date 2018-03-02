import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { Card, Image, Loader, Message } from 'semantic-ui-react';

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
        .shuffle() // Shuffle the array of cats
        .take(2) // Take the first 2 cats
        .value();
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
    return (
      <Message negative>
        <Message.Header>Meeow!</Message.Header>
        <p>An error occured while loading cats!</p>
      </Message>
    );
  };

  voteForCat = id => {
    console.log(`voted for cat ${id}`);
  };

  renderCats = () => {
    const { cats } = this.state;
    return (
      <Card.Group centered rows={2}>
        {cats.map(cat => (
          <Card link key={cat.id} className="thumbnail">
            <Image
              className="thumbnail"
              centered
              circular
              bordered
              size="massive"
              as="img"
              src={cat.url}
              onClick={e => this.voteForCat(cat.id, e)}
            />
          </Card>
        ))}
      </Card.Group>
    );
  };
  render() {
    const { loading, error } = this.state;
    return (
      <div>
        {loading ? <Loader active inline /> : null}
        {error ? this.renderError() : null}
        {!loading && !error ? this.renderCats() : null}
      </div>
    );
  }
}

export default Home;
