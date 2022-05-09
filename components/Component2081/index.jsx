import React from "react";
import Component1941 from "../Component1941";
import Component1951 from "../Component1951";
import Component1961 from "../Component1961";
import Component1971 from "../Component1971";
import Component1981 from "../Component1981";
import Component1991 from "../Component1991";
import Component2051 from "../Component2051";
import Component2041 from "../Component2041";
import Component2031 from "../Component2031";
import Component2001 from "../Component2001";
import Component2011 from "../Component2011";
import Component2071 from "../Component2071";
import Component2061 from "../Component2061";
import Component2021 from "../Component2021";
import "./Component2081.css";

function Component2081(props) {
  const {
    path1370,
    logout,
    overlapGroup,
    settings,
    component1941Props,
    component1951Props,
    component1961Props,
    component1971Props,
    component1981Props,
    component1991Props,
    component2051Props,
    component2041Props,
    component2031Props,
    component2001Props,
    component2011Props,
    component2071Props,
    component2061Props,
    component2021Props,
  } = props;

  return (
    <div className="component-208-1">
      <Component1941 path4={component1941Props.path4} place={component1941Props.place} />
      <Component1951
        group3={component1951Props.group3}
        path3={component1951Props.path3}
        annotate={component1951Props.annotate}
      />
      <Component1961 user={component1961Props.user} customers={component1961Props.customers} />
      <Component1971
        group1039={component1971Props.group1039}
        path732={component1971Props.path732}
        invoices={component1971Props.invoices}
      />
      <Component1981
        path1265={component1981Props.path1265}
        path1266={component1981Props.path1266}
        path1267={component1981Props.path1267}
        path1268={component1981Props.path1268}
        path1269={component1981Props.path1269}
        expenses={component1981Props.expenses}
      />
      <div className="overlap-group7">
        <Component1991
          path1270={component1991Props.path1270}
          path1271={component1991Props.path1271}
          path1272={component1991Props.path1272}
          quotes={component1991Props.quotes}
        />
        <div className="mask-group-2">
          <div className="group-3812">
            <Component2051>{component2051Props.children}</Component2051>
            <Component2041>{component2041Props.children}</Component2041>
            <Component2031>{component2031Props.children}</Component2031>
          </div>
        </div>
      </div>
      <Component2001 arrow_Up341={component2001Props.arrow_Up341} place={component2001Props.place} />
      <Component2011 path1345={component2011Props.path1345} accouting={component2011Props.accouting} />
      <div className="mask-group-3">
        <div className="group-3813">
          <Component2071>{component2071Props.children}</Component2071>
          <Component2061>{component2061Props.children}</Component2061>
        </div>
      </div>
      <Component2021 {...component2021Props} />
      <div className="group-3815">
        <img className="path-1370-1" src={path1370} />
        <div className="logout-1 nunito-normal-purple-mountains-majesty-18px">{logout}</div>
      </div>
      <div className="group-3816">
        <div className="group-3817">
          <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="ellipse-2"></div>
          </div>
        </div>
        <div className="settings-1 nunito-normal-purple-mountains-majesty-18px">{settings}</div>
      </div>
    </div>
  );
}

export default Component2081;
