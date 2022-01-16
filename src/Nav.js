import React from "react";
import "./Nav.css";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";

function Nav() {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [ifSearch, setIfSearch] = useState(false);
  const [searchBox, setSearchBox] = useState();
  const onMenuIconClick = () => {
    setIsDropDownVisible(!isDropdownVisible);
  };
  const disableDropdown = () => {
    setIsDropDownVisible(false);
  };
  const handleSearch = (e) => {
    if (e.target.id === "searchIcon") {
      if (searchBox && searchBox.value !== "") {
        setSearchValue(searchBox.value);
        setIfSearch(true);
        e.preventDefault();
      }
    } else {
      searchBox || setSearchBox(e.target);
      setSearchValue(e.target.value);
      if (e.key === "Enter" && searchValue !== "") {
        setIfSearch(true);
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    setSearchValue("");
    setIsDropDownVisible(false);
    setIfSearch(false);
    setSearchBox();
  }, [ifSearch]);

  return (
    <>
      <div className="nav">
        <Link to="/" className="nav__left" onClick={disableDropdown}>
          <GroupWorkIcon />
          <p>Moobees</p>
          <span>.</span>
        </Link>
        <div className="nav__right">
          <MenuIcon onClick={onMenuIconClick} />
        </div>
      </div>

      {isDropdownVisible && (
        <div className="navDropdown">
          <div
            className="navDropdown__noContent"
            onClick={disableDropdown}
          ></div>
          <div className="navDropdown__content">
            <div className="navDropdown__contentSearchbar">
              <SearchIcon onClick={handleSearch} id="searchIcon" />
              <input
                type="text"
                placeholder="Search for keyword....."
                onKeyPress={handleSearch}
                required
              />
            </div>
            {ifSearch && <Redirect to={`/movies/keyword/${searchValue}`} />}
            <Link onClick={disableDropdown}>
              <li>
                Login
                <LoginIcon />
              </li>
            </Link>
            <Link onClick={disableDropdown}>
              <li>SignUp</li>
            </Link>

            <li className="list-title">
              Categories <KeyboardArrowDownIcon />
            </li>

            <Link to="/movies/genre/action" onClick={disableDropdown}>
              <li className="list-items">Action</li>
            </Link>
            <Link to="/movies/genre/thriller" onClick={disableDropdown}>
              <li className="list-items">Thriller</li>
            </Link>

            <Link to="/movies/genre/romance" onClick={disableDropdown}>
              <li className="list-items">Romance</li>
            </Link>
            <Link to="/movies/genre/adventure" onClick={disableDropdown}>
              <li className="list-items">Adventure</li>
            </Link>
            <Link to="/movies/genre/sciFi" onClick={disableDropdown}>
              <li className="list-items">SciFi</li>
            </Link>
            <Link to="/movies/genre/comedy" onClick={disableDropdown}>
              <li className="list-items">Comedy</li>
            </Link>
            <Link onClick={disableDropdown}>
              <li>About Us</li>
            </Link>
            <Link onClick={disableDropdown}>
              <li>Contact Us</li>
            </Link>
            <Link to="/admin" onClick={disableDropdown}>
              <li>Admin</li>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
