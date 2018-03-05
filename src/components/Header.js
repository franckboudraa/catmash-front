import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="mb-5">
        <Menu attached borderless className="head-gradient" inverted widths={1}>
          <Menu.Item className="righteous font-4rem">CAT MASH</Menu.Item>
        </Menu>
        <Menu attached inverted color="red" widths={2}>
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            className="righteous font-175rem"
            size="massive"
          >
            Arena
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/scores"
            className="righteous font-175rem"
          >
            Rankings
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
