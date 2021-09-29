import React from "react";
import Banner from "./Banner";
import "./Body.css";
import Nav from "./Nav";
import BestArtistsRow from "./BestArtistsRow";
import MoviesRow from "./MoviesRow";
import Footer from "./Footer";
// import { useMediaQuery } from "react-responsive";

function Body() {
  // const isLaptopScreen = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <div className="body">
      <Nav />
      <Banner />
      <BestArtistsRow />
      {/* {isLaptopScreen || <MoviesRow title="Popular Movies" />} */}
      <MoviesRow title="Popular Movies" />
      <MoviesRow title="Trending Movies" />
      <MoviesRow title="Action Movies" />
      <MoviesRow title="Thriller Movies" />
      <MoviesRow title="Comedy Movies" />
      <MoviesRow title="Romantic Movies" />
      <MoviesRow title="SciFi Movies" />
      <MoviesRow title="Documentries" />
      <Footer />
    </div>
  );
}

export default Body;
