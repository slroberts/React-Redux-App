import React, {useState} from "react";
import {Link} from "react-router-dom";

import {Menu} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleActiveItem = (e, {name}) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu secondary style={{marginBottom: "6rem"}}>
        <Menu.Item name="Developers Hub" as="h1" />
        <Menu.Menu position="right">
          <Menu.Item
            name="Search"
            active={activeItem === "Search"}
            onClick={handleActiveItem}
          >
            <Link to="/">
              <Icon name="search" /> Search
            </Link>
          </Menu.Item>

          <Menu.Item
            name="Saved Jobs"
            active={activeItem === "Saved Jobs"}
            onClick={handleActiveItem}
          >
            <Link to="/saved-jobs">
              <Icon name="briefcase" /> Saved Jobs
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
