import React from "react";
import Group861 from "../Group861";
import Group860 from "../Group860";
import "./Component711.css";

function Component711(props) {
  const { group861Props, group860Props } = props;

  return (
    <div className="component-71-1">
      <Group861 group861={group861Props.group861} />
      <div className="mask-group-2-1">
        <Group860 addAccount={group860Props.addAccount} createAccount={group860Props.createAccount} />
      </div>
    </div>
  );
}

export default Component711;
