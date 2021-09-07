import React from "react";
import "./Body.css";
import Row from "./Row";
function Body() {
  return (
    <div className="body">
      <Row title="Trending Movies" />
      <Row title="Popular Movies" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Horror Movies" />
      <Row title="Crime Movies" />
      <Row title="Fantasy Movies" />
    </div>
  );
}

export default Body;
