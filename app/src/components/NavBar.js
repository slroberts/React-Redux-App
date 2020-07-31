import React, {useState} from "react";
import {Link} from "react-router-dom";

import {Menu} from "semantic-ui-react";

const NavBar = (props) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleActiveItem = (e, {name}) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu secondary style={{marginBottom: "6rem"}}>
        <Menu.Item name="Developers Hub" as="h1" />
        <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item
              name="Search"
              active={activeItem === "Search"}
              onClick={handleActiveItem}
            />
          </Link>
          <Link to="/saved-jobs">
            <Menu.Item
              name="Saved Jobs"
              active={activeItem === "Saved Jobs"}
              onClick={handleActiveItem}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
