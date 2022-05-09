import React from "react";
import "./Component2601.css";

function Component2601(props) {
  const { path5836, group8373, switchBanking, layer1, switchHrPayroll } = props;

  return (
    <div className="component-260-1">
      <div className="group-8376">
        <img className="path-5836" src={path5836} />
      </div>
      <div className="mask-group-33">
        <div className="group-8372">
          <div className="group-8368">
            <div className="group-8367">
              <div className="group-8373" style={{ backgroundImage: `url(${group8373})` }}></div>
            </div>
            <div className="switch-banking nunito-normal-dolphin-20px">{switchBanking}</div>
          </div>
          <div className="group-8370">
            <div className="group-8369">
              <div className="layer1" style={{ backgroundImage: `url(${layer1})` }}></div>
            </div>
            <div className="switch-hr-payroll nunito-normal-dolphin-20px">{switchHrPayroll}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2601;
