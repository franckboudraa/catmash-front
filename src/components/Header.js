import React from 'react';

import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mb-5">
      <Menu attached borderless inverted secondary widths={1}>
        <Menu.Item className="righteous text-white font-4rem">
          CAT MASH
        </Menu.Item>
      </Menu>
      <Menu attached inverted className="bg-red-gradient" widths={2}>
        <Menu.Item
          as={NavLink}
          exact
          to="/"
          className="righteous font-185rem"
          size="massive"
        >
          Arena
        </Menu.Item>
        <Menu.Item as={NavLink} to="/scores" className="righteous font-185rem">
          Rankings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
