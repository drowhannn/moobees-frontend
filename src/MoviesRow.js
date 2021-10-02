import React, { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import "./MoviesRow.css";
import axios from "./axios";

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
        <a href="">View all</a>
      </div>
      <div className="row__movies">
        {movies.length ? (
          movies?.map((movie) => (
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
                  <button>Watch</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies to display.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesRow;
