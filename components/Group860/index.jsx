import React from "react";
import "./Group860.css";

function Group860(props) {
  const { addAccount, createAccount, className } = props;

  return (
    <div className={`group-860 nunito-normal-heavy-metal-16px ${className || ""}`}>
      <div className="add">{addAccount}</div>
      <div className="create">{createAccount}</div>
    </div>
  );
}

export default Group860;
