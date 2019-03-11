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
// import index from "../redux/index.js";
import { connect } from "react-redux";


//Chat
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  state = {
    redirect: false,
    searchTerm: "",
    loggedIn: false
  };

  handleSearch = e => {
    this.setState({ redirect: true, searchTerm: e.target[0].value });
  };

  componentDidUpdate(prevState) {
    if (this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  handleSession = loggedIn => {
    this.setState({ loggedIn });
  };

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
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
        {this.props.loggedIn && <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          // profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />}
        <Footer className="footer" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
