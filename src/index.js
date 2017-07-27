import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import App from "./WebApp/App";
import ChatApp from "./Chatter/ChatApp";
import MappingAndFiltering from "./MapAndFilter/MappingAndFiltering";
import AcmeApp from "./Acme/AcmeApp";
import GoogleMap from "./Acme/GoogleMap";
import PlaygroundApp from "./Playground/PlaygroundApp";

//OUr router should navigate to:
  // Home
  // ChatApp
  // NumbersMap
  // WebApp

const Home = () => {
  return (
  <div>
    <h1> Hello from Home </h1>
  </div>
)
}

// inserting here ***********************



// to here *****************************





ReactDOM.render((
  <Router>
    <div>
     <NavigationBar />
       <div className="index">
         <Route exact path="/" component={Home} />
         <Route path="/WebApp" component={App} />
         <Route path="/Chatter" component={ChatApp} />
         <Route path="/MapAndFilter" component={MappingAndFiltering} />
         <Route path="/Acme" component={AcmeApp} />
         <Route path="/Playground" component={PlaygroundApp} />
       </div>
    </div>
  </Router>
), document.getElementById("root"));
