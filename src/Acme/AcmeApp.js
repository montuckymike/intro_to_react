import React from "react";
import DATA from "./DATA.js";
import Customer from "./Customer";
import Hero from "./Hero";

const AcmeApp = () => {
  return (
    <div className ="acme-app-container">
      <Hero />
      <div className = "acme-section-one">
        <div className = "acme-section-one-text">
        <h1> Test </h1>
        </div>
      </div>
      <Customer />
    </div>
  )
}

export default AcmeApp;
