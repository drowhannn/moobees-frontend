import React from "react";
import "./BestArtistsRow.css";
import StarIcon from "@material-ui/icons/Star";

function BestArtistsRow() {
  const bestArtists = [
    {
      name: "Robert Downey Jr",
      numOfMovies: 55,
      rating: 5,
      profileImageUrl:
        "https://icon-library.com/images/tony-stark-icon/tony-stark-icon-26.jpg",
    },
    {
      name: "Tom Hardy",
      numOfMovies: 51,
      rating: 4,
      profileImageUrl:
        "https://i.pinimg.com/originals/31/92/65/3192653198538338d7af1261be898a83.jpg",
    },
    {
      name: "Chris Hemsworth",
      numOfMovies: 43,
      rating: 5,
      profileImageUrl:
        "https://assets-cdn.kathmandupost.com/uploads/source/news/2016/entertainment/18072016013035rs_634x761-160324135931-634.Chris-Hemsworth-Modern-Luxury2-Kf.32416.jpg",
    },
    {
      name: "Kit Harington",
      numOfMovies: 32,
      rating: 4,
      profileImageUrl:
        "https://i.pinimg.com/564x/94/70/80/9470806dd0f216046421c5388681ab98.jpg",
    },
  ];

  function returnStars(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<StarIcon />);
    }
    return stars;
  }

  // else {
  //   artistsOrMovies = [
  //     {
  //       name: "Avengers Endgame",
  //       posterUrl:
  //         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg",
  //       genre: ["Action", "Thriller"],
  //       rating: "9.1",
  //     },
  //     {
  //       name: "Iron Man",
  //       posterUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
  //       genre: ["SciFi", "Fantasy"],
  //       rating: "9.5",
  //     },
  //     {
  //       name: "Deadpool",
  //       posterUrl: "https://i.ebayimg.com/images/g/QEYAAOSw4DJYmmOQ/s-l400.jpg",
  //       genre: ["Action", "Comedy"],
  //       rating: "8.9",
  //     },
  //     {
  //       name: "The Suicide Squad",
  //       posterUrl:
  //         "https://i1.wp.com/www.moviewallpapers.me/wp-content/uploads/2021/04/The_Suicide_Squad_2021_Posters_2764x4096_noresize-2.jpg?fit=608%2C900&ssl=1",
  //       genre: ["SciFi", "Fantasy"],
  //       rating: "7.8",
  //     },
  //   ];
  // }
  return (
    <div className="row">
      <h3>Best Artists</h3>
      <div className="row__artists">
        {bestArtists.map((bestArtist) => (
          <div className="row__artist">
            <img src={bestArtist.profileImageUrl} alt="" />
            <div className="row__artist__contentDiv">
              <div className="row__artist__content">
                <h5>{bestArtist.name}</h5>
                <p>{`+${bestArtist.numOfMovies} Movies`}</p>
                <div className="row__artist__content__stars">
                  {returnStars(bestArtist.rating).map((star) => star)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestArtistsRow;
