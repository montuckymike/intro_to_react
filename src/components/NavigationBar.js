import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
  return(
  <div className="navbar">
    <ul className="navlinks">
      <li className="links"> <Link to="/"> Home </Link> </li>
      <li className="links"> <Link to="/WebApp"> WebApp </Link> </li>
      <li className="links"> <Link to="/Chatter"> Chatter </Link> </li>
      <li className="links"> <Link to="/MappingAndFiltering"> MappingAndFiltering </Link> </li>
      <li className="links"> <Link to="/Acme"> AcmeApp </Link> </li>
    </ul>
  </div>
  )
}

export default NavigationBar;
