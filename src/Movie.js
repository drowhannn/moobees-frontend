import React, { useState, useEffect } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import axios from "./axios";

const Movie = ({ fetchUrl }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl + id);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie">
      <div className="movie__header">
        <h1>{movie?.name}</h1>
        <p>
          {movie?.releaseDate?.slice(0, 4)} - {movie?.ageRating} -{" "}
          {movie?.runTime}
        </p>
      </div>
      <div className="movie__body">
        <iframe
          src="https://www.youtube.com/embed/X2m-08cOAbc"
          title="YouTube video player"
          frameborder="0"
          allow=""
          allowfullscreen
        ></iframe>
        <div className="movie__bodyDetails">
          <div className="movie__bodyDetail">
            <h4>Status</h4>
            <p>Released</p>
          </div>
          <div className="movie__bodyDetail">
            <h4>Original Launguage</h4>
            <p>{movie?.originalLanguage}</p>
          </div>

          <div className="movie__bodyDetail">
            <h4>Budget</h4>
            <p>
              ${" "}
              {movie?.budget
                ?.toString()
                ?.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="movie__bodyDetail">
            <h4>Revenue</h4>
            <p>
              ${" "}
              {movie?.revenue
                ?.toString()
                ?.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="movie__bodyDetail keywords">
            <h4>Keywords</h4>
            <p>
              {movie?.keywords?.map((keyword) => (
                <span>{keyword}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="movie__description">
        <div className="movie__descriptionGenres">
          {movie?.genres?.map((genre) => (
            <span>{genre}</span>
          ))}
        </div>
        <div className="movie__descriptionOverview">{movie?.description}</div>
        <div className="movie__descriptionDirector">
          <h4>Director</h4>
          <p>{movie?.director?.join(", ")}</p>
        </div>
        <div className="movie__descriptionStars">
          <h4>Stars</h4>
          <p>{movie?.casts?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
