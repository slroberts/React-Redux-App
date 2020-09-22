import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, Icon } from 'semantic-ui-react';
const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleActiveItem = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Container>
      <Menu secondary>
        <Menu.Item
          name="Developers Hub"
          as="h1"
          position="left"
          style={{
            marginLeft: '-1.5rem',
            fontFamily: 'Comfortaa',
            letterSpacing: '-.120rem',
          }}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="Search"
            active={activeItem === 'Search'}
            onClick={handleActiveItem}
            as={Link}
            to="/"
          >
            <Icon name="search" /> Search
          </Menu.Item>

          <Menu.Item
            name="Saved Jobs"
            active={activeItem === 'Saved Jobs'}
            onClick={handleActiveItem}
            as={Link}
            to="/saved-jobs"
          >
            <Icon name="briefcase" /> Saved Jobs
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default NavBar;
