import React from "react";
import "./Group6.css";

function Group6(props) {
  const { className } = props;

  return (
    <div className={`group-6 ${className || ""}`}>
      <img className="path-6" src="/img/path-6-1@1x.png" />
    </div>
  );
}

export default Group6;
