import React from "react";
import "./Component1951.css";

function Component1951(props) {
  const { group3, path3, annotate } = props;

  return (
    <div className="component-195-1">
      <div className="group-3" style={{ backgroundImage: `url(${group3})` }}>
        <img className="path-3" src={path3} />
      </div>
      <div className="annotate nunito-normal-dolphin-18px">{annotate}</div>
    </div>
  );
}

export default Component1951;
