import React from 'react';
import { Menu, Responsive } from 'semantic-ui-react';

const Footer = ({ location }) => {
  let footerClass = '';
  if (location !== '/scores') {
    footerClass = 'bottom fixed';
  }
  return (
    <Responsive
      as={Menu}
      minWidth={768}
      borderless
      secondary
      inverted
      className={'mt-5 ' + footerClass}
      widths={1}
      size="mini"
    >
      <Menu.Item>
        <a
          href="http://www.franckboudraa.me"
          target="_blank"
          rel="noopener noreferrer"
          title="Franck Boudraa"
        >
          &copy; Franck Boudraa - All Rights Reserved 2018
        </a>
      </Menu.Item>
    </Responsive>
  );
};

export default Footer;
