import React from "react";
import DATA from "./DATA.js";
import Customer from "./Customer";
import Hero from "./Hero";
import AcmeMap from "./AcmeMap";
import GoogleMap from "./GoogleMap";

const AcmeApp = () => {
  return (
    <div className ="acme-app-container">
      <Hero />
      <AcmeMap />
      <GoogleMap />
      <Customer />
    </div>
  )
}

export default AcmeApp;
