import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="movieCard"
      style={{ backgroundImage: `url(${movie.posterUrl})` }}
    >
      <Link to={`/movie/${movie._id}`} className="movieCard__link">
        <div className="movieCard__content">
          <h5>{movie.name}</h5>
          <p>{movie.genres.join(", ")}</p>
          <div className="movieCard__contentRating">
            <StarIcon />
            <span>{movie.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
