import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Scores from './components/Scores';
import Footer from './components/Footer';

import './assets/main.css';

import { Container } from 'semantic-ui-react';

const API_URL = 'https://catmashback.herokuapp.com';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route
            exact
            path="/"
            render={props => <Home {...props} apiURL={API_URL} />}
          />
          <Route
            path="/scores"
            render={props => <Scores {...props} apiURL={API_URL} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
