import React from "react";
import "./Address.css";

function Address() {
  return (
    <div id="contact" className="address-container">
      <div className="address-main">
        YOU CAN’T <span className="small-text">USE UP</span> <br /> CREATIVITY.{" "}
        <br /> THE MORE YOU USE, THE MORE
        <span className="small-text"> YOU HAVE.</span>
      </div>

      <div>
        <div className="address-card">
          <div className="main-city">Banglore(HQ)</div>
          <div className="address-line">
            100, 9th Main Road Electronic City, Bengaluru, Karnataka 560100
          </div>
        </div>
        <div className="address-card">
          <div className="main-city">Banglore(HQ)</div>
          <div className="address-line">
            100, 9th Main Road Electronic City, Bengaluru, Karnataka 560100
          </div>
        </div>
        <div className="address-card">
          <div className="main-city">Banglore(HQ)</div>
          <div className="address-line">
            100, 9th Main Road Electronic City, Bengaluru, Karnataka 560100
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
