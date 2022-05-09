import React from "react";
import "./Component1961.css";

function Component1961(props) {
  const { user, customers } = props;

  return (
    <div className="component-196-1">
      <img className="user" src={user} />
      <div className="customers nunito-normal-dolphin-18px">{customers}</div>
    </div>
  );
}

export default Component1961;
