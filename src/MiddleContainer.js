import React from "react";
import Banner from "./Banner";
import "./MiddleContainer.css";
import Nav from "./Nav";

function MiddleContainer() {
  return (
    <div className="middleContainer">
      <Nav />
      <Banner />
    </div>
  );
}

export default MiddleContainer;
