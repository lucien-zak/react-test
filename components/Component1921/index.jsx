import React from "react";
import Component1912 from "../Component1912";
import "./Component1921.css";

function Component1921(props) {
  const {
    layer11,
    quantumDynamics1,
    path1364,
    path1365,
    layer12,
    quantumDynamics2,
    shivomAggarwal,
    logout,
    path1370,
    line1,
    path1366,
    seeMyCompany,
    line2,
    path1367,
    liveChat,
    line3,
    xmlid_211_,
    xmlid_415_,
    xmlid_426_,
    support,
    line4,
    path1368,
    changePassword,
    line5,
    overlapGroup,
    settings,
    component1912Props,
  } = props;

  return (
    <div className="component-192-1">
      <div className="group-3795">
        <div className="group-4 border-0-5px-purple-heart">
          <div className="layer1-1" style={{ backgroundImage: `url(${layer11})` }}></div>
        </div>
        <div className="quantum-dynamics">{quantumDynamics1}</div>
        <img className="path-1364" src={path1364} />
      </div>
      <div className="mask-group-1">
        <div className="group-3806">
          <img className="path-1365" src={path1365} />
          <div className="group-3804">
            <div className="group-3796">
              <div className="group-4-1 border-0-5px-purple-heart">
                <div className="layer1-2" style={{ backgroundImage: `url(${layer12})` }}></div>
              </div>
              <div className="overlap-group-2">
                <div className="quantum-dynamics-1">{quantumDynamics2}</div>
                <div className="shivom-aggarwal nunito-normal-dolphin-18px">{shivomAggarwal}</div>
              </div>
            </div>
            <div className="flex-row-6">
              <Component1912>{component1912Props.children}</Component1912>
              <div className="group-3803">
                <div className="logout nunito-normal-purple-mountains-majesty-18px">{logout}</div>
                <img className="path-1370" src={path1370} />
              </div>
            </div>
          </div>
          <div className="group-3805">
            <img className="line-1-1" src={line1} />
            <div className="group-3797">
              <img className="path-136" src={path1366} />
              <div className="see-my-company nunito-normal-purple-mountains-majesty-20px">{seeMyCompany}</div>
            </div>
            <img className="line-1" src={line2} />
            <div className="group-3798">
              <img className="path-136" src={path1367} />
              <div className="live-chat nunito-normal-purple-mountains-majesty-20px">{liveChat}</div>
            </div>
            <img className="line-1" src={line3} />
            <div className="group-3799">
              <div className="xmlid_146_">
                <div className="xmlid_-container">
                  <img className="xmlid_211_" src={xmlid_211_} />
                  <img className="xmlid_415_" src={xmlid_415_} />
                  <img className="xmlid_426_" src={xmlid_426_} />
                </div>
              </div>
              <div className="support nunito-normal-purple-mountains-majesty-20px">{support}</div>
            </div>
            <img className="line-1" src={line4} />
            <div className="group-3800">
              <img className="path-1368" src={path1368} />
              <div className="change-password nunito-normal-purple-mountains-majesty-20px">{changePassword}</div>
            </div>
            <img className="line-1" src={line5} />
            <div className="group-3801">
              <div className="group-3802">
                <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className="ellipse-1"></div>
                </div>
              </div>
              <div className="settings nunito-normal-purple-mountains-majesty-20px">{settings}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1921;
