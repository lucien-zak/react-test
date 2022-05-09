import React from "react";
import "./Component2021.css";

function Component2021(props) {
  const {
    path13601,
    group37801,
    path13621,
    group37811,
    path13602,
    group37802,
    path13622,
    group37812,
    path1359,
    submitANewDocumentHere,
  } = props;

  return (
    <div className="component-202-1">
      <div className="overlap-group-container">
        <div className="overlap-group-5">
          <img className="path-1360" src={path13601} />
          <div className="group-3780" style={{ backgroundImage: `url(${group37801})` }}>
            <img className="path-1362" src={path13621} />
          </div>
          <div className="group-3781" style={{ backgroundImage: `url(${group37811})` }}></div>
        </div>
        <div className="overlap-group1-1">
          <img className="path-1360" src={path13602} />
          <div className="group-3780" style={{ backgroundImage: `url(${group37802})` }}>
            <img className="path-1362" src={path13622} />
          </div>
          <div className="group-3781" style={{ backgroundImage: `url(${group37812})` }}></div>
        </div>
        <div className="overlap-group2">
          <div className="rectangle-3653"></div>
          <div className="rectangle-3654"></div>
          <img className="path-1359" src={path1359} />
        </div>
      </div>
      <div className="submit-a-new-document-here">{submitANewDocumentHere}</div>
    </div>
  );
}

export default Component2021;
