import React from "react";
import DATA from "./DATA";

const Hero = () => {
  const hero = DATA.company.map(function(item){
    return (
      <div>
        <div className="hero-text">
          <h1 className="hero-title"> { item.title } </h1>
          <button>Contact Us</button>
        </div>
      </div>
    )
  })
  return (
    <div>
        <div className="hero-image">
          { hero }
        </div>
    </div>
  )
}


export default Hero;



// return (
//   <div>
//     <div className="hero-text">
//       <h1> { item.title } </h1>
//       <h3> { item.phoneNumber } </h3>
//       <p> { item.street }</p>
//       <p> { item.city}, {item.state} {item.zip} </p>
//     </div>
//   </div>
// )
// })
// return (
// <div>
//     <div className="hero-container">
//       { hero }
//     </div>
// </div>
// )
