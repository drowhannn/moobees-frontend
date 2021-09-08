import React from "react";
import "./LeftContainerOption.css";

function LeftContainerOption({ title, Icon }) {
  return (
    <div className={"leftContainerOption" + (!Icon && " containsSubHeading")}>
      {Icon && <Icon className="leftContainerOption__icon" />}
      {Icon ? <p>{title}</p> : <h4>{title}</h4>}
    </div>
  );
}

export default LeftContainerOption;
