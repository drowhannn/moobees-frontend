import React from "react";
import "./Nav.css";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav__left">
        <GroupWorkIcon />
        <p>Moobees</p>
        <span>.</span>
      </Link>
      <div className="nav__right">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Nav;
