import React from "react";
import "./Component2001.css";

function Component2001(props) {
  const { arrow_Up341, place } = props;

  return (
    <div className="component-200-1">
      <div className="page-1">
        <div className="dribbble-light-preview">
          <div className="icons">
            <img className="arrow_up-341" src={arrow_Up341} />
          </div>
        </div>
      </div>
      <div className="place-2 nunito-normal-dolphin-18px">{place}</div>
    </div>
  );
}

export default Component2001;
