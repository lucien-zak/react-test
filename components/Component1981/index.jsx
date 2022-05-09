import React from "react";
import "./Component1981.css";

function Component1981(props) {
  const { path1265, path1266, path1267, path1268, path1269, expenses } = props;

  return (
    <div className="component-198-1">
      <div className="layer-2">
        <div className="path-container">
          <img className="path-1265" src={path1265} />
          <img className="path-1266" src={path1266} />
          <img className="path-1267" src={path1267} />
          <img className="path-1268" src={path1268} />
          <img className="path-1269" src={path1269} />
        </div>
      </div>
      <div className="expenses nunito-normal-dolphin-18px">{expenses}</div>
    </div>
  );
}

export default Component1981;
