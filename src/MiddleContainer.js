import React from "react";
import Banner from "./Banner";
import "./MiddleContainer.css";
import Nav from "./Nav";
import BestArtistsRow from "./BestArtistsRow";
import MoviesRow from "./MoviesRow";
import Footer from "./Footer";

function MiddleContainer() {
  return (
    <div className="middleContainer">
      <Nav />
      <Banner />
      <BestArtistsRow />
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

export default MiddleContainer;
