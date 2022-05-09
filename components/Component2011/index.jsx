import React from "react";
import "./Component2011.css";

function Component2011(props) {
  const { path1345, accouting } = props;

  return (
    <div className="component-201-1">
      <img className="path-1345" src={path1345} />
      <div className="accouting nunito-normal-dolphin-18px">{accouting}</div>
    </div>
  );
}

export default Component2011;
