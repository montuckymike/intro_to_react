import React from "react";

const NavBar = (props) => {
  return (
    <nav className="nav">
      <ul className="nav-item-container">
        {
          props.navLinks.map(function(item, index){
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </nav>
  )
}

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h3> {props.header}</h3>
      <p> {props.callToAction} </p>
    </div>
  )
}

const SectionOne = (props) => {
  return (
    <div className="sectionOne">
      <h1> {props.header}</h1>
      <p> {props.subHeader} </p>
    </div>
  )
}

const SectionTwo = (props) => {
  return (
    <div className="sectionTwo">
      <h1> {props.header}</h1>
      <p> {props.subHeader} </p>
    </div>
  )
}

const WebApp = () => {
  return (
  <div className="app-container">
    <NavBar navLinks={["Home", "Contact Us", "About Us"]} />
    <Jumbotron
    header={"Super Duper Web App 👩🏻‍💼"}
    callToAction={"Built from React "}
    />
    <SectionOne
    header={"Header for Section 1"}
    subHeader={"sub header for section one"}
    />
    <SectionTwo
    header={"Header for Section 2"}
    subHeader={"sub header for section two"}
    />
  </div>
  )
}

export default WebApp;
