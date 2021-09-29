import React from "react";
import "./Banner.css";

function Banner() {
  const movie = {
    name: "Deadpool",
    genre: ["Action", "Comedy"],
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://www.teahub.io/photos/full/0-7085_deadpool-wallpaper-for-laptop.jpg")`,
      }}
    >
      <div className="banner__content">
        <h1>{movie.name}</h1>
        <p>{movie.genre.join(", ")}</p>
        <button>Watch</button>
      </div>
    </div>
  );
}

export default Banner;
