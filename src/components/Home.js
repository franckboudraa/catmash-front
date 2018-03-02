import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { Card, Icon, Image, Loader, Message } from 'semantic-ui-react';

const SelectedCatMessage = () => (
  <Card.Content>
    <Card.Description style={{ textAlign: 'center' }}>
      <Icon color="green" size="massive" name="check circle" />
    </Card.Description>
  </Card.Content>
);

const NotSelectedCatMessage = ({ id }) => {
  if (id === 0) {
    return '';
  } else {
    return (
      <Card.Content>
        <Card.Description style={{ textAlign: 'center' }}>
          <Icon color="red" size="massive" name="remove circle" />
        </Card.Description>
      </Card.Content>
    );
  }
};

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
    this.setState({
      swipeAnimation: true,
      selectedCat: id
    });
    setTimeout(
      function() {
        this.setState({
          loading: true,
          swipeAnimation: false,
          cats: [],
          selectedCat: 0
        });
        this.fetchCats();
      }.bind(this),
      600
    );
  };

  renderCats = () => {
    const { cats, swipeAnimation, selectedCat } = this.state;
    return (
      <Card.Group centered rows={2} className="radius">
        {cats.map((cat, index) => (
          <Card
            link
            key={cat.id}
            style={{ width: '300px' }}
            className={
              (index === 0 ? 'swipe-left ' : 'swipe-right ') +
              (swipeAnimation ? 'animit' : '')
            }
          >
            <Image
              className="thumbnail"
              centered
              circular
              bordered
              size="massive"
              as="img"
              src={cat.url}
              onClick={e => {
                this.voteForCat(cat.id, e);
              }}
            />
            {selectedCat === cat.id ? (
              <SelectedCatMessage />
            ) : (
              <NotSelectedCatMessage id={selectedCat} />
            )}
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
