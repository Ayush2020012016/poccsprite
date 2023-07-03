import React from "react";
import "./app.css";

const App = () => {
  const flags = [
    { from: "INR", to: "USD" },
    { from: "JPY", to: "AUD" },
    { from: "AUD", to: "CAD" },
    { from: "HUF", to: "PHP" },
    { from: "CHF", to: "THB" },
  ];
  return (
    <>
      <div className="wrapper">
        {flags.map((value, index) => {
          return <Flagcomponent flag1={value.from} flag2={value.to} />;
        })}
      </div>
    </>
  );
};

const Flagcomponent = ({ flag1, flag2 }) => {
  const data = {
    AUD: "australia",
    BRL: "brazil",
    CAD: "canada",
    CLP: "chile",
    CNY: "china",
    CZK: "czech republic",
    DKK: "denmark",
    HKD: "hong kong",
    HUF: "hungary",
    INR: "india",
    IDR: "indonesia",
    JPY: "japan",
    MYR: "malaysia",
    MXN: "mexico",
    NZD: "new zealand",
    NOK: "norway",
    PHP: "philippines",
    PLN: "poland",
    QAR: "qatar",
    RON: "romania",
    RUB: "russia",
    SAR: "saudi arabia",
    SGD: "singapore",
    ZAR: "south africa",
    KRW: "korea",
    CHF: "switzerland",
    TWD: "taiwan",
    THB: "thailand",
    TRY: "turkey",
    USD: "united states",
  };
  const url1 = `./Flags/${data[flag1]}.svg`;
  const url2 = `./Flags/${data[flag2]}.svg`;
  console.log(url1, url2);

  return (
    <>
      <div className="listwrapper">
        <div className="firstsection">
          <div style={{ position: "relative" }} className="">
            <img src={url1} alt="" />
            <img className="leftflag" src={url2} alt="" />
          </div>
          <div className="stringsection">
            <span>{flag1}</span>
            {" -> "}
            <span>{flag2}</span>
          </div>
        </div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
};

export default App;
