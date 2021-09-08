import React from "react";
import "./RightContainer.css";
import SearchIcon from "@material-ui/icons/Search";
import RightContainerColumn from "./RightContainerColumn";

function RightContainer() {
  const popularMovies = [
    {
      name: "John Wick",
      posterUrl: "https://m.media-amazon.com/images/I/81vZ6tNxuoL._SY500_.jpg",
      genre: ["Action", "Horror"],
      rating: 7.4,
    },
    {
      name: "John Wick",
      posterUrl: "https://m.media-amazon.com/images/I/81vZ6tNxuoL._SY500_.jpg",
      genre: ["Action", "Horror"],
      rating: 7.4,
    },
    {
      name: "John Wick",
      posterUrl: "https://m.media-amazon.com/images/I/81vZ6tNxuoL._SY500_.jpg",
      genre: ["Action", "Horror"],
      rating: 7.4,
    },
  ];
  return (
    <div className="rightContainer">
      <div className="rightContainer__searchDiv">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <RightContainerColumn title="Popular Movies" movies={popularMovies} />
      <RightContainerColumn title="Favorite Movies" movies={popularMovies} />
    </div>
  );
}

export default RightContainer;
