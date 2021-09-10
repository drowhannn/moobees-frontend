import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./MoviesRow.css";

function MoviesRow({ title }) {
  const movies = [
    {
      name: "Avengers Endgame",
      posterUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg",
      genre: ["Action", "Thriller"],
      rating: "9.1",
    },
    {
      name: "Iron Man",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
      genre: ["SciFi", "Fantasy"],
      rating: "9.5",
    },
    {
      name: "Deadpool",
      posterUrl: "https://i.ebayimg.com/images/g/QEYAAOSw4DJYmmOQ/s-l400.jpg",
      genre: ["Action", "Comedy"],
      rating: "8.9",
    },
    {
      name: "The Suicide Squad",
      posterUrl:
        "https://i1.wp.com/www.moviewallpapers.me/wp-content/uploads/2021/04/The_Suicide_Squad_2021_Posters_2764x4096_noresize-2.jpg?fit=608%2C900&ssl=1",
      genre: ["SciFi", "Fantasy"],
      rating: "7.8",
    },
  ];
  return (
    <div className="moviesRow">
      <h3>{title}</h3>
      <div className="row__movies">
        {movies.map((movie) => (
          <div className="row__movie">
            <img src={movie.posterUrl} alt="" />
            <div className="row__movie__contentDiv">
              <div className="row__movie__content">
                <h5>{movie.name}</h5>
                <p>{movie.genre.join(", ")}</p>
                <div className="row__movie__content__rating">
                  <StarIcon />
                  <span>{movie.rating}</span>
                </div>
                <button>Watch</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesRow;
