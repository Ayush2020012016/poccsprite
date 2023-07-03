import React from "react";
import "./app.css";

const App = () => {
  const flags = [
    { from: "INR", to: "USD" },
    { from: "AZN", to: "AUD" },
    { from: "AFN", to: "EUR" },
    { from: "ALL", to: "DZD" },
    { from: "ARS", to: "AMD" },
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
    AFN: "af",
    ALL: "al",
    DZD: "dz",
    EUR: "ad",
    AOA: "ao",
    ARS: "ar",
    AMD: "am",
    AUD: "au",
    AZN: "az",
    INR: "in",
    USD: "us",
  };
  const dataentries = Object.keys(data);
  console.log(dataentries, data["AFN"]);
  return (
    <>
      <div className="listwrapper">
        <div className="firstsection">
          <div style={{ position: "relative" }} className="">
            <span
              style={{ borderRadius: "50%", width: "2em", height: "2em" }}
              className={`fi fi-${data[flag1]} fis rightflag`}
            ></span>
            <span
              style={{ borderRadius: "50%", width: "2em", height: "2em" }}
              className={`fi fi-${data[flag2]} fis leftflag`}
            ></span>
          </div>
          <div>
            <span>{flag1}</span>
            {"->"}
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
