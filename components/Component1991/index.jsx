import React from "react";
import "./Component1991.css";

function Component1991(props) {
  const { path1270, path1271, path1272, quotes } = props;

  return (
    <div className="component-199-1">
      <div className="group-3557">
        <div className="path-container-1">
          <img className="path-1270" src={path1270} />
          <img className="path-1271" src={path1271} />
          <img className="path-1272" src={path1272} />
        </div>
      </div>
      <div className="quotes nunito-normal-dolphin-18px">{quotes}</div>
    </div>
  );
}

export default Component1991;
