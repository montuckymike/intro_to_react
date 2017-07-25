import React from "react";
import DATA from "./DATA";

const Customer = () => {
  const customerItems = DATA.customers.map(function(item){
    return (

        <div className="card">
          <img className="card-img" src={item.img} />
            <div className="card-title">
              <h3> { item.name } </h3>
            </div>
          <div className="card-summary">
          <h4> { item.email } </h4>
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

// const Customer = (props) => {
//   const customer = props.customers.map(function(customer, index){
//     return (
//       <div key = {index}>
//         <h1>{customer.name} </h1>
//       </div>
//     )
//   })
//   return(
//     <div>
//       {customer}
//     </div>
//   )
// }


export default Customer;
