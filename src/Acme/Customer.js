import React from "react";
import DATA from "./DATA";

const Customer = () => {
  const customerItems = DATA.customers.map(function(item){
    return (

        <div className="card">
          <img className="card-img" src={item.img} />
          <div className="container">
            <h1> { item.name } </h1>
            <p className="card-title"> { item.email } </p>
            <p><button className="card-button">Contact</button></p>
          </div>
        </div>
    )
  })
  return (
    <div className="customer-app">
      <div className="customer-container">
        { customerItems }
      </div>
    </div>
  )
}

export default Customer;
