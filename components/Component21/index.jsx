import React from "react";
import Group844 from "../Group844";
import "./Component21.css";

function Component21(props) {
  const { bansiraPrimary332295, bansiraMain445656, bnp445656, allAccounts, group837, group844Props } = props;

  return (
    <div className="component-2-1">
      <div className="overlap-group5 nunito-normal-dolphin-16px">
        <div className="mask-group-1-1">
          <div className="group-848">
            <div className="group-845">
              <Group844 />
              <div className="bansira-primary-3322-95">{bansiraPrimary332295}</div>
            </div>
            <div className="group-846">
              <Group844 />
              <div className="bansira-main-4456-56">{bansiraMain445656}</div>
            </div>
            <div className="group-847">
              <Group844 />
              <div className="bnp-4456-56">{bnp445656}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-570 border-1px-snuff"></div>
        <div className="all-accounts">{allAccounts}</div>
        <div className="group-837-1" style={{ backgroundImage: `url(${group837})` }}></div>
        <Group844 className={group844Props.className} />
      </div>
    </div>
  );
}

export default Component21;
