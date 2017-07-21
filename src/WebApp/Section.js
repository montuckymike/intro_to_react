import React from "react";

const Section = (props) => {
  return (
    <div className="sectionOne">
      <h1> {props.header}</h1>
      <p> {props.subHeader} </p>
    </div>
  )
}



export default Section;
