import React, { useState, useEffect } from "react";
import "./Movies.css";
import { useParams } from "react-router-dom";
import axios from "./axios";

const Movies = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchUrl = genre === "latest" ? "/movies/" : "movies/genre/";
    async function fetchData() {
      const request = await axios.get(fetchUrl + genre);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="movies">
      <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)} Movies</h2>
      <div className="movies__collection">
        {movies?.map((movie) => (
          <></>
        ))}
      </div>
    </div>
  );
};

export default Movies;
