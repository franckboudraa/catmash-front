import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="mb-2">
        <Menu attached borderless className="head-gradient" inverted widths={1}>
          <Menu.Item className="brand">CAT MASH</Menu.Item>
        </Menu>
        <Menu attached widths={2}>
          <Menu.Item as={NavLink} exact to="/">
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/scores">
            Scores
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
