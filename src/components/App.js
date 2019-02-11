//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

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

  state = {
    redirect: false,
    searchTerm: ""
  };

  handleSearch = e => {
    this.setState({ redirect: true, searchTerm: e.target[0].value });
  };

  componentDidUpdate(prevState) {
    if (this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  render() {

    const { children } = this.props;
    let content = <Content body={children} className="content" />;
    if (this.state.redirect) {
      content = <Redirect to="/Results" to={{
        pathname: '/Results',
        searchTerm: this.state.searchTerm
      }} />
    }

    return (
      <div className="App" >
        <NavBar handleSearchResults={this.handleSearch} />
        {content}
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
