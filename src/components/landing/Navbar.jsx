import React, { Component } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Label,
//   Button,
//   Input,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   FormGroup
// } from "reactstrap";

import { Link, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user-actions";
import store from "../../redux/store/index";
import "./navbar.css";
import "../../styles/fontello.css"

class NavBar extends Component {
  constructor(props) {
    super(props);

    store.subscribe(() => {
      this.handleSessionChange();
    });

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      redirect: false,
      loggedIn: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubmitSearch = e => {
    e.preventDefault();


    if (e.target[0].value && e.target[0].value !== "") {
      this.props.handleSearchResults(e);
    }
  };

  handleSession = loggedIn => {
    this.setState({ loggedIn });
  };

  handleSubmitLogOut = () => {
    userActions.logout();
  };

  handleSessionChange = () => {
    // console.log("subscribed");
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="Results" />
    }

    return (
      <nav className="navbar navbar-expand-lg">
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="navbar-brand txt-primary" to={"/"}>
            Learnify
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-menu" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" data-toggle="collapse" data-target=".navbar-collapse.show">
            {this.props.loggedIn && <li className="nav-item">
              <Link className="nav-link txt-secondary" to={"/Profile"}>
                Profile
              </Link>
            </li>}
            {this.props.loggedIn &&
              <li className="nav-item pr-sm-2">
                <Link className="nav-link txt-secondary" to={"/chat"}>
                  Chat
              </Link>
              </li>
            }
            <li className="nav-item">
              <Link className="nav-link txt-secondary" to={"/Blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txt-secondary" to={"/Contact"}>
                Contact
              </Link>
            </li>

            {!this.props.loggedIn &&
              <li className="nav-item pr-sm-2">
                <Link
                  className="nav-link txt-primary btn btn-outline-info auth-button"
                  to={"/LogIn"}
                >
                  LogIn
              </Link>
              </li>
            }
            {
              !this.props.loggedIn &&
              <li className="nav-item">
                <Link
                  className="nav-link txt-primary btn btn-outline-info auth-button"
                  to={"/SignIn"}
                >
                  Sign Up
              </Link>
              </li>
            }
          </ul>

          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.handleSubmitSearch}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search-input"
            />
            <button
              className="txt-primary btn btn-outline-info my-2 my-sm-0"
              type="submit"
              id="search-btn"
              onClick={this.handleClick}
            >
              Search
            </button>
            <button className="txt-primary btn btn-outline-info icon-search"
              type="submit"
              data-toggle="collapse" data-target=".navbar-collapse.show"
            >
            </button>
          </form>
          {this.props.loggedIn && <form onSubmit={this.handleSubmitLogOut}>
            <button
              className="txt-primary btn btn-outline-info my-2 my-sm-0"
              id="log-out"
            >
              LogOut
            </button>
          </form>}
        </div>
      </nav>


    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export default connectedNavBar;

