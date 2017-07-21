import React from "react";
import NavBar from "./NavBar";
import Section from "./Section";
import Jumbotron from "./Jumbotron";

const App = () => {
  return (
  <div className="app-container">
    <NavBar navLinks={["Home", "Contact Us", "About Us"]} />
    <Jumbotron
    header={"Super Duper Web App 👩🏻‍💼"}
    callToAction={"Built from React "}
    />
    <Section
    header={"Header for Section 1"}
    subHeader={"sub header for section one"}
    />
    <Section
    header={"Header for Section 2"}
    subHeader={"sub header for section two"}
    />
  </div>
  )
}

export default App;
