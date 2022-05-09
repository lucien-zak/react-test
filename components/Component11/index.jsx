import React from "react";
import Group558 from "../Group558";
import Group834 from "../Group834";
import "./Component11.css";

function Component11(props) {
  const {
    executed,
    running,
    beneficiary,
    iconIonicMdArrowDropup1,
    iconIonicMdArrowDropup2,
    account,
    place,
    nextTransfer,
    amount,
    iconIonicMdArrowDropup3,
    iconIonicMdArrowDropup4,
    path668,
    address1,
    bansiraMain445656,
    x1000Eur,
    address2,
    path667,
    jhonDoe,
    fro600000000000000000950000,
    group5581Props,
    group5582Props,
    group5583Props,
    group8341Props,
    group8342Props,
    group8343Props,
  } = props;

  return (
    <div className="component-1-1">
      <div className="group-container-3">
        <div className="group-840">
          <div className="executed nunito-normal-white-16px">{executed}</div>
        </div>
        <div className="group-841">
          <div className="running nunito-normal-white-16px">{running}</div>
        </div>
      </div>
      <div className="group-839">
        <div className="table-header-1">
          <div className="group-543-1">
            <div className="group-20-4">
              <div className="group-19-4">
                <div className="beneficiary nunito-normal-dolphin-18px">{beneficiary}</div>
                <div className="group-544">
                  <img className="icon-ionic-md-arrow-dropup" src={iconIonicMdArrowDropup1} />
                  <img className="icon-ionic-md-arrow-dropup-1" src={iconIonicMdArrowDropup2} />
                </div>
              </div>
            </div>
          </div>
          <div className="group-832">
            <div className="group-20-5">
              <div className="group-19-5">
                <div className="account nunito-normal-dolphin-18px">{account}</div>
                <Group558
                  path319={group5581Props.path319}
                  path320={group5581Props.path320}
                  path321={group5581Props.path321}
                />
              </div>
            </div>
          </div>
          <div className="group-557-1">
            <div className="group-20-6">
              <div className="group-19-6">
                <div className="place-3 nunito-normal-dolphin-18px">{place}</div>
                <Group558
                  path319={group5582Props.path319}
                  path320={group5582Props.path320}
                  path321={group5582Props.path321}
                  className={group5582Props.className}
                />
              </div>
            </div>
          </div>
          <div className="group-833">
            <div className="group-20-7">
              <div className="group-19-7">
                <div className="next-transfer nunito-normal-dolphin-18px">{nextTransfer}</div>
                <Group558
                  path319={group5583Props.path319}
                  path320={group5583Props.path320}
                  path321={group5583Props.path321}
                />
              </div>
            </div>
          </div>
          <div className="group-768-1">
            <div className="group-20-8">
              <div className="group-19-8">
                <div className="amount-1 nunito-normal-dolphin-18px">{amount}</div>
                <div className="group-828">
                  <img className="icon-ionic-md-arrow-dropup" src={iconIonicMdArrowDropup3} />
                  <img className="icon-ionic-md-arrow-dropup-1" src={iconIonicMdArrowDropup4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-829">
          <div className="overlap-group1-2 nunito-normal-dolphin-16px">
            <img className="path-668-1" src={path668} />
            <div className="rectangle-567-1"></div>
            <div className="address-2">{address1}</div>
            <div className="bansira-main-4456-56-1">{bansiraMain445656}</div>
            <div className="x1000-eur">{x1000Eur}</div>
            <div className="address-3">{address2}</div>
            <img className="path-667-1" src={path667} />
            <div className="overlap-group-6">
              <div className="jhon-doe nunito-normal-dolphin-16px">{jhonDoe}</div>
              <p className="fro6-0000-0000-0000-0000-0950-000 nunito-normal-blue-haze-11px">
                {fro600000000000000000950000}
              </p>
            </div>
          </div>
        </div>
        <Group834
          address1={group8341Props.address1}
          bnp445656={group8341Props.bnp445656}
          x1200Eur={group8341Props.x1200Eur}
          address2={group8341Props.address2}
          philleieFudsa={group8341Props.philleieFudsa}
          fro50000000000000000995544={group8341Props.fro50000000000000000995544}
        />
        <Group834
          address1={group8342Props.address1}
          bnp445656={group8342Props.bnp445656}
          x1200Eur={group8342Props.x1200Eur}
          address2={group8342Props.address2}
          philleieFudsa={group8342Props.philleieFudsa}
          fro50000000000000000995544={group8342Props.fro50000000000000000995544}
          className={group8342Props.className}
        />
        <Group834
          address1={group8343Props.address1}
          bnp445656={group8343Props.bnp445656}
          x1200Eur={group8343Props.x1200Eur}
          address2={group8343Props.address2}
          philleieFudsa={group8343Props.philleieFudsa}
          fro50000000000000000995544={group8343Props.fro50000000000000000995544}
          className={group8343Props.className}
        />
      </div>
    </div>
  );
}

export default Component11;
