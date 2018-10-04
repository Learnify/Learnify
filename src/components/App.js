import React, { Component } from "react";
import logo from "../resources/logo.svg";
import NavBar from "./landing/Navbar.jsx";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
