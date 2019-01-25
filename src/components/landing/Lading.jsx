import React, { Component } from "react";
import "./Landing.css";
//import NavBar from "./Navbar.jsx";

class Landing extends Component {
  render() {
    return (
      <div className="container landing">
        <h1>
          LEARNIFY
        </h1>
        <p className="main" align="center">
        Welcome to the app that will help you improve all your skills.
        </p>
      </div>
    );
  }
}
export default Landing;
