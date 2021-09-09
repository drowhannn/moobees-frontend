import React from "react";
import Banner from "./Banner";
import "./MiddleContainer.css";
import Nav from "./Nav";
import BestArtistsRow from "./BestArtistsRow";

function MiddleContainer() {
  return (
    <div className="middleContainer">
      <Nav />
      <Banner />
      <BestArtistsRow />
    </div>
  );
}

export default MiddleContainer;
