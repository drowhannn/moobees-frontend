import React, { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import "./MoviesRow.css";
import axios from "./axios";
import { Link } from "react-router-dom";

function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.slice(0, 6));
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="moviesRow">
      <div className="moviesRow__heading">
        <h3>{title}</h3>
        <Link
          to={`/movies/${
            title.split(" ")[0][0].toLowerCase() + title.split(" ")[0].slice(1)
          }`}
        >
          View all
        </Link>
      </div>
      <div className="row__movies">
        {movies.length ? (
          movies?.map((movie) => (
            <Link to={`/movie/${movie._id}`}>
              <div className="row__movie">
                <img src={movie.posterUrl} alt="" />
                <div className="row__movie__contentDiv">
                  <div className="row__movie__content">
                    <h5>{movie.name}</h5>
                    <p>{movie.genres.join(", ")}</p>
                    <div className="row__movie__content__rating">
                      <StarIcon />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No movies to display.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesRow;
