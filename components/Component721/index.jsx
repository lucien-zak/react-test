import React from "react";
import Group861 from "../Group861";
import Group860 from "../Group860";
import "./Component721.css";

function Component721(props) {
  const { group861Props, group860Props } = props;

  return (
    <div className="component-72-1">
      <Group861 group861={group861Props.group861} className={group861Props.className} />
      <div className="mask-group-2-2">
        <Group860
          addAccount={group860Props.addAccount}
          createAccount={group860Props.createAccount}
          className={group860Props.className}
        />
      </div>
    </div>
  );
}

export default Component721;
