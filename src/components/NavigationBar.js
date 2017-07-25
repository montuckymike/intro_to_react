import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
  return(
  <div className="navbar">
    <ul className="navlinks ">
      <li className="links"> <Link className="Link " to="/"> Home </Link> </li>
      <li className="links"> <Link className="Link " to="/WebApp"> WebApp </Link> </li>
      <li className="links"> <Link className="Link " to="/Chatter"> Chatter </Link> </li>
      <li className="links"> <Link className="Link " to="/MappingAndFiltering"> MappingAndFiltering </Link> </li>
      <li className="links"> <Link className="Link " to="/Acme"> AcmeApp </Link> </li>
    </ul>
  </div>
  )
}

export default NavigationBar;
