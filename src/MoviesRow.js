import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./MoviesRow.css";
import axios from "./axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

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
          movies?.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <p>No movies to display.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesRow;
