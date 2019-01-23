//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

//Components
// import Header from "./Global/Header";
import Footer from "./Global/Footer";
import Content from "./Global/Content";
import NavBar from "./landing/Navbar.jsx";
// import Authentication from "./authentication/authentication.js";

//Data
import "../styles/App.css";

//Redux
import index from "../redux/index.js";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Content body={children} className="content" />
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
