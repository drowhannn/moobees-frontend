import React, { useState, useEffect } from "react";
import "./Movies.css";
import { useParams } from "react-router-dom";
import axios from "./axios";
import MovieCard from "./MovieCard";

const Movies = ({ isGenre }) => {
  const { genre, keyword } = useParams();
  const genreORkeyword = isGenre ? genre : keyword;
  console.log(genreORkeyword);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchUrl = isGenre
      ? genreORkeyword === "latest"
        ? "/movies/"
        : "/movies/genre/"
      : "/movies/keyword/";
    async function fetchData() {
      const request = await axios.get(fetchUrl + genreORkeyword);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, [genreORkeyword]);

  return (
    <div className="movies">
      <h2>
        {isGenre &&
          genreORkeyword.charAt(0).toUpperCase() +
            genreORkeyword.slice(1) +
            " Movies"}
        {!isGenre && `Movies for keyword "${genreORkeyword}"`}
      </h2>
      {movies.length ? (
        <div className="row__movies">
          {movies?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies to display.</p>
      )}
    </div>
  );
};

export default Movies;
