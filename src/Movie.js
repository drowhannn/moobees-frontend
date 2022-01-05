import React, { useState, useEffect } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import axios from "./axios";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/movie/id/" + id);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="movie">
      <div className="movie__header">
        <div className="mover__headerLeft">
          <h1>{movie?.name}</h1>
          <p>
            {movie?.releaseDate?.slice(0, 4)} - {movie?.ageRating} -{" "}
            {movie?.runTime}
          </p>
        </div>
        <div className="movie__headerRight">
          <h3>Rating</h3>
          <p>
            <StarIcon />
            {movie?.rating} / 10
          </p>
        </div>
      </div>
      <div className="movie__body">
        <iframe
          src={movie?.trailerUrl}
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
            <Link
              className="movieGenre__link"
              to={`/movies/${
                genre.split(" ")[0][0].toLowerCase() +
                genre.split(" ")[0].slice(1)
              }`}
            >
              <p>{genre}</p>
            </Link>
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
