import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import { Link } from "react-router-dom";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.slice(0, 11)[Math.floor(Math.random() * 11)]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie?.bannerUrl})`,
      }}
    >
      <div className="banner__content">
        <h1>{movie?.name}</h1>
        <p>{movie?.genres.join(", ")}</p>
        <Link to={`/movie/${movie?._id}`}>
          <button>Watch</button>
        </Link>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
}

export default Banner;
