import React from "react";
import ReactDOM from "react-dom";
import WebApp from "./WebApp";
import "./styles.css";
import DATA from "./DATA"
import MappingAndFiltering from "./MappingAndFiltering";

ReactDOM.render(<MappingAndFiltering
   title={"Maps woo woo!"}
   allTheData={DATA}
   />, document.getElementById("root"))
