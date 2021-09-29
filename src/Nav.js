import React, { useState, useEffect } from "react";
import "./Nav.css";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  const [show, setShow] = useState(false);

  const controlNavBg = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBg);
    return () => {
      window.removeEventListener("scroll", controlNavBg);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__bg"}`}>
      <div className="nav__left">
        <GroupWorkIcon />
        <p>Moobees</p>
        <span>.</span>
      </div>
      <div className="nav__right">
        <MenuIcon />
      </div>
      {/* <div className="nav__items">
        <ul>
          <li className="nav__item">
            <a href="">Home</a>
          </li>
          <li className="nav__item">
            <a href="">Contact</a>
          </li>
          <li className="nav__item">
            <a href="">About Us</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="nav__search">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div> */}
    </div>
  );
}

export default Nav;
