//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

//Components
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import Content from "./Global/Content";
import NavBar from "./landing/Navbar.jsx";
import Authentication from "./authentication/authentication.js";

//Data
import "../styles/App.css";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Authentication />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
