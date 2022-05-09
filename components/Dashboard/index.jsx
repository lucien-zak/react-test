import React from "react";
import Component1931 from "../Component1931";
import Component2081 from "../Component2081";
import Group6 from "../Group6";
import Component711 from "../Component711";
import Group49 from "../Group49";
import Component721 from "../Component721";
import Group492 from "../Group492";
import Component21 from "../Component21";
import Component11 from "../Component11";
import Component741 from "../Component741";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    allCash,
    price1,
    line2,
    line3,
    cards,
    text1,
    price2,
    price3,
    line4,
    text2,
    price4,
    price5,
    transfers,
    path669,
    address1,
    group837,
    path15,
    invoices,
    toBeTransferred,
    transferred,
    name,
    client,
    place,
    amount,
    path6681,
    address2,
    price6,
    path6671,
    phone1,
    techLimited1,
    path6682,
    address3,
    price7,
    path6672,
    phone2,
    techLimited2,
    path6683,
    address4,
    price8,
    path6673,
    phone3,
    techLimited3,
    path6684,
    address5,
    price9,
    path6674,
    phone4,
    techLimited4,
    path6685,
    address6,
    price10,
    path6675,
    phone5,
    techLimited5,
    path6686,
    address7,
    price11,
    path6676,
    phone6,
    techLimited6,
    component1931Props,
    component2081Props,
    component711Props,
    group491Props,
    group492Props,
    group493Props,
    component721Props,
    group6Props,
    group492Props2,
    component21Props,
    component11Props,
    component741Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <Component1931
          overlapGroup8={component1931Props.overlapGroup8}
          logo={component1931Props.logo}
          path1371={component1931Props.path1371}
          search={component1931Props.search}
          component2601Props={component1931Props.component2601Props}
          component1921Props={component1931Props.component1921Props}
        />
        <Component2081 {...component2081Props} />
        <div className="group-container">
          <div className="group-7">
            <div className="flex-row">
              <div className="flex-col">
                <div className="all-cash nunito-semi-bold-butterfly-bush-20px">{allCash}</div>
                <h1 className="price-1">{price1}</h1>
              </div>
              <Group6 />
              <Component711
                group861Props={component711Props.group861Props}
                group860Props={component711Props.group860Props}
              />
            </div>
            <Group49 main234534={group491Props.main234534} price={group491Props.price} />
            <img className="line" src={line2} />
            <Group49
              main234534={group492Props.main234534}
              price={group492Props.price}
              className={group492Props.className}
            />
            <img className="line" src={line3} />
            <Group49
              main234534={group493Props.main234534}
              price={group493Props.price}
              className={group493Props.className}
            />
          </div>
          <div className="group-52">
            <div className="flex-row-1">
              <div className="cards nunito-semi-bold-butterfly-bush-20px">{cards}</div>
              <Component721
                group861Props={component721Props.group861Props}
                group860Props={component721Props.group860Props}
              />
            </div>
            <div className="group-container-1">
              <Group492 />
              <Group6 className={group6Props.className} />
              <div className="group-54">
                <div className="rectangle-21"></div>
              </div>
            </div>
            <div className="flex-row-2 nunito-normal-sonic-silver-16px">
              <div className="text">{text1}</div>
              <div className="price-2">{price2}</div>
              <div className="price-3">{price3}</div>
            </div>
            <img className="line-4" src={line4} />
            <Group492 className={group492Props2.className} />
            <div className="group-55">
              <div className="rectangle-22"></div>
            </div>
            <div className="flex-row-3 nunito-normal-dolphin-16px">
              <div className="text">{text2}</div>
              <div className="price-4">{price4}</div>
              <div className="price-5">{price5}</div>
            </div>
          </div>
        </div>
        <div className="group-container-2">
          <div className="group-57">
            <div className="flex-row-4">
              <div className="transfers nunito-semi-bold-butterfly-bush-20px">{transfers}</div>
              <Component21
                bansiraPrimary332295={component21Props.bansiraPrimary332295}
                bansiraMain445656={component21Props.bansiraMain445656}
                bnp445656={component21Props.bnp445656}
                allAccounts={component21Props.allAccounts}
                group837={component21Props.group837}
                group844Props={component21Props.group844Props}
              />
              <div className="group-838 border-1px-snuff">
                <img className="path-669" src={path669} />
                <div className="address-1 nunito-normal-dolphin-16px">{address1}</div>
                <div className="group-837" style={{ backgroundImage: `url(${group837})` }}></div>
              </div>
              <img className="path-15" src={path15} />
            </div>
            <Component11 {...component11Props} />
          </div>
          <div className="group-873">
            <div className="flex-row-5">
              <div className="flex-col-1">
                <div className="invoices">{invoices}</div>
                <div className="group-876">
                  <div className="to-be-transferred nunito-normal-white-16px">{toBeTransferred}</div>
                </div>
              </div>
              <div className="group-877">
                <div className="transferred nunito-normal-white-16px">{transferred}</div>
              </div>
            </div>
            <div className="scroll-group-7 nunito-normal-dolphin-16px">
              <div className="overlap-group6">
                <div className="table-header">
                  <div className="group-543">
                    <div className="group-20">
                      <div className="group-19">
                        <div className="name nunito-normal-dolphin-18px">{name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-874">
                    <div className="group-20-1">
                      <div className="group-19-1">
                        <div className="client nunito-normal-dolphin-18px">{client}</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-557">
                    <div className="group-20-2">
                      <div className="group-19-2">
                        <div className="place nunito-normal-dolphin-18px">{place}</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-768">
                    <div className="group-20-3">
                      <div className="group-19-3">
                        <div className="amount nunito-normal-dolphin-18px">{amount}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-1">
                  <img className="path-668" src={path6681} />
                  <div className="rectangle-567"></div>
                  <div className="address">{address2}</div>
                  <div className="price">{price6}</div>
                  <img className="path-667" src={path6671} />
                  <div className="phone">{phone1}</div>
                  <div className="tech-limited">{techLimited1}</div>
                </div>
                <div className="overlap-group1">
                  <img className="path-668" src={path6682} />
                  <div className="rectangle-567"></div>
                  <div className="address">{address3}</div>
                  <div className="price">{price7}</div>
                  <img className="path-667" src={path6672} />
                  <div className="phone">{phone2}</div>
                  <div className="tech-limited">{techLimited2}</div>
                </div>
              </div>
              <div className="overlap-group">
                <img className="path-668" src={path6683} />
                <div className="rectangle-567"></div>
                <div className="address">{address4}</div>
                <div className="price">{price8}</div>
                <img className="path-667" src={path6673} />
                <div className="phone">{phone3}</div>
                <div className="tech-limited">{techLimited3}</div>
              </div>
              <div className="overlap-group">
                <img className="path-668" src={path6684} />
                <div className="rectangle-567"></div>
                <div className="address">{address5}</div>
                <div className="price">{price9}</div>
                <img className="path-667" src={path6674} />
                <div className="phone">{phone4}</div>
                <div className="tech-limited">{techLimited4}</div>
              </div>
              <div className="overlap-group">
                <img className="path-668" src={path6685} />
                <div className="rectangle-567"></div>
                <div className="address">{address6}</div>
                <div className="price">{price10}</div>
                <img className="path-667" src={path6675} />
                <div className="phone">{phone5}</div>
                <div className="tech-limited">{techLimited5}</div>
              </div>
              <div className="overlap-group nunito-normal-dolphin-16px">
                <img className="path-668" src={path6686} />
                <div className="rectangle-567"></div>
                <div className="address">{address7}</div>
                <div className="price">{price11}</div>
                <img className="path-667" src={path6676} />
                <div className="phone">{phone6}</div>
                <div className="tech-limited">{techLimited6}</div>
              </div>
            </div>
            <Component741>{component741Props.children}</Component741>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
