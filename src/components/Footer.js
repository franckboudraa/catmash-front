import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Menu borderless secondary className="mt-5" widths={1} size="mini">
        <Menu.Item>&copy; Franck Boudraa - All Rights Reserved 2018</Menu.Item>
      </Menu>
    );
  }
}

export default Footer;
