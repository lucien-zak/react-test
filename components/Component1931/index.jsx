import React from "react";
import Component2601 from "../Component2601";
import Component1921 from "../Component1921";
import "./Component1931.css";

function Component1931(props) {
  const { overlapGroup8, logo, path1371, search, component2601Props, component1921Props } = props;

  return (
    <div className="component-193-1">
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
        <div className="logo">{logo}</div>
        <Component2601
          path5836={component2601Props.path5836}
          group8373={component2601Props.group8373}
          switchBanking={component2601Props.switchBanking}
          layer1={component2601Props.layer1}
          switchHrPayroll={component2601Props.switchHrPayroll}
        />
        <div className="group-3794 border-1px-snuff">
          <img className="path-1371" src={path1371} />
          <div className="search">{search}</div>
        </div>
        <Component1921 {...component1921Props} />
      </div>
    </div>
  );
}

export default Component1931;
