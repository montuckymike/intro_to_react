import React from "react";
import DATA from "./DATA";

const AcmeMap = () => {
  const acmeMap = DATA.company.map(function(item){
    return (
      <div className="acme-map">
          <h1 className="big-title"> How to find us </h1>
          <div className="acme-info">
          <h3 className="big-phone"> { item.phoneNumber } </h3>
          <p> { item.street }</p>
          <p> { item.city}, {item.state} {item.zip} </p>
          </div>
          <button>Contact Us</button>
        </div>
    )
  })
  return (
    <div>
          { acmeMap }
    </div>
  )
}




export default AcmeMap;
