import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./RightContainerColumn.css";

function RightContainerColumn({ title, movies }) {
  return (
    <div className="rightContainerColumn">
      <h3>{title}</h3>
      <div className="rightContainerColumn__movies">
        {movies.map((movie) => (
          <div className="rightContainerColumn__movie">
            <img src={movie.posterUrl} alt={movie.name} />
            <div className="rightContainerColumn__movieDescription">
              <div className="rightContainerColumn__movieSubDescription">
                <h4>{movie.name}</h4>
                <p>{movie.genre.join(", ")}</p>
              </div>
              <div className="rightContainerColumn__movieRatings">
                <StarIcon />
                <span>{movie.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>See More</button>
    </div>
  );
}

export default RightContainerColumn;
