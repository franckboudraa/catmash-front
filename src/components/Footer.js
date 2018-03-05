import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = ({ location }) => {
  let footerClass = '';
  if (location !== '/scores') {
    footerClass = 'bottom fixed';
  }
  return (
    <Menu
      borderless
      secondary
      inverted
      className={'mt-5 ' + footerClass}
      widths={1}
      size="mini"
    >
      <Menu.Item>&copy; Franck Boudraa - All Rights Reserved 2018</Menu.Item>
    </Menu>
  );
};

export default Footer;
