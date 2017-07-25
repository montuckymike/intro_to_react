import React from "react";
import DATA from "./DATA";

const Hero = () => {
  const hero = DATA.company.map(function(item){
    return (
      <div>
        <div className="hero-text">
          <h1> { item.title } </h1>
          <h3> { item.phoneNumber } </h3>
          <p> { item.street }</p>
          <p> { item.city}, {item.state} {item.zip} </p>
        </div>
      </div>
    )
  })
  return (
    <div>
        <div className="hero-container">
          { hero }
        </div>
    </div>
  )
}


export default Hero;
