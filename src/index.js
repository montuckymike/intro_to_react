import React from "react";
import ReactDOM from "react-dom";
import App from "./WebApp/App";
import "./styles.css";
import CHAT_DATA from "./Chatter/DATA";
import MappingAndFiltering from "./MappingAndFiltering";
import ChatApp from "./Chatter/ChatApp";



ReactDOM.render(<ChatApp data={CHAT_DATA}/>, document.getElementById("root"))
