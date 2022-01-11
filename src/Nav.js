import React from "react";
import "./Nav.css";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginIcon from "@mui/icons-material/Login";

function Nav() {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const onMenuIconClick = () => {
    setIsDropDownVisible(!isDropdownVisible);
  };
  const disableDropdown = () => {
    setIsDropDownVisible(false);
  };
  useEffect(() => {
    setIsDropDownVisible(false);
  }, []);
  return (
    <>
      <div className="nav">
        <Link to="/" className="nav__left">
          <GroupWorkIcon />
          <p>Moobees</p>
          <span>.</span>
        </Link>
        <div className="nav__right">
          <MenuIcon onClick={onMenuIconClick} />
        </div>
      </div>

      {isDropdownVisible && (
        <div className="navDropdown" onClick={disableDropdown}>
          <div className="navDropdown__content">
            <Link>
              <li>
                Login
                <LoginIcon />
              </li>
            </Link>
            <Link>
              <li>SignUp</li>
            </Link>

            <li className="list-title">
              Categories <KeyboardArrowDownIcon />
            </li>

            <Link to="/movies/action">
              <li className="list-items">Action</li>
            </Link>
            <Link to="/movies/thriller">
              <li className="list-items">Thriller</li>
            </Link>

            <Link to="/movies/romance">
              <li className="list-items">Romance</li>
            </Link>
            <Link to="/movies/adventure">
              <li className="list-items">Adventure</li>
            </Link>
            <Link to="/movies/sciFi">
              <li className="list-items">SciFi</li>
            </Link>
            <Link to="/movies/comedy">
              <li className="list-items">Comedy</li>
            </Link>
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              {" "}
              <li>Contact Us</li>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
