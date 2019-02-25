import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Label,
  Button,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup
} from "reactstrap";

import { Link, Redirect, Switch } from "react-router-dom";
import "./navbar.css";
import "../../styles/fontello.css"

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      redirect: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSubmitSearch = e => {
    e.preventDefault();
    if(e.target[0].value && e.target[0].value !== ""){
      this.props.handleSearchResults(e);
    }
  };

  state = {};
  render() {
    const {redirect} = this.state;

    if(redirect){
      return <Redirect to="Results"/>
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top bg-light">
        <Link className="navbar-brand txt-primary" to={"/"}>
          Learnify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link txt-secondary" to={"/Contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txt-secondary" to={"/Blog"}>
                Blog
              </Link>
            </li>
            
            <li className="nav-item pr-sm-2"> 
              <Link
                className="nav-link txt-primary btn btn-outline-info auth-button"
                to={"/LogIn"}
              >
                LogIn
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-link txt-primary btn btn-outline-info auth-button"
                to={"/SignIn"}
              >
                Sign Up
              </Link>
            </li>
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
            >
              Search
            </button>
            <button className="txt-primary btn btn-outline-info icon-search"
              type="submit"
              id="search-btn"
            >
            </button>
          </form>
          <button className="txt-primary btn btn-outline-info my-2 my-sm-0" id="log-out">
            LogOut
          </button>
        </div>
      </nav>

    
    );
  }
}

export default NavBar;
