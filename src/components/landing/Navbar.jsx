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
            {/* El mx-auto molesta en vista pequeña los botones  */}
            <li className="nav-item mx-auto pr-sm-2"> 
              <Link
                className="nav-link txt-primary btn btn-outline-info auth-button"
                to={"/LogIn"}
              >
                LogIn
              </Link>
            </li>
            {/* El mx-auto molesta en vista pequeña los botones  */}
            <li className="nav-item mx-auto">
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
            />
            <button
              className="txt-primary btn btn-outline-info my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      // <Navbar light expand="md">
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-md-2 col-4" align="left">
      //         <NavbarBrand className="learnify-navbar all">
      //           <Link to={"/"}>Learnify</Link>
      //         </NavbarBrand>
      //       </div>
      //       <div className="col-md-10 col-8 dropdown-navbar">
      //         <NavbarToggler className="mr2" onClick={this.toggle} />
      //         <Collapse isOpen={this.state.isOpen} navbar>
      //           <div className="row">
      //             <div className="col-md-6 col-sm-12">
      //               <FormGroup className="search-container w-100 md-0 active-cyan-3 active-cyan-4">
      //                 <Input
      //                   type="search"
      //                   name="search"
      //                   id="exampleSearch"
      //                   placeholder="search for tutoring..."
      //                 />
      //               </FormGroup>
      //             </div>
      //             <div className="col-md-6 col-sm-12">
      //               <Nav className="ml-auto navbar-inverse auth-buttons" navbar>
      //                 <NavItem>
      //                   <NavLink className="all">
      //                     <Link to={"/Contact"}>Contact</Link>
      //                   </NavLink>
      //                 </NavItem>
      //                 <NavItem>
      //                   <div className="navbar-blog">
      //                     <NavLink className="all">
      //                       <Link to={"/Blog"}>Blog</Link>
      //                     </NavLink>
      //                   </div>
      //                 </NavItem>
      //                 <NavItem>
      //                   <NavLink className="auth-button">
      //                     <Button color="info" outline>
      //                       <Link to={"/LogIn"}>LogIn</Link>
      //                     </Button>
      //                   </NavLink>
      //                 </NavItem>
      //                 <NavItem>
      //                   <NavLink className="auth-button">
      //                     <Button color="info" outline>
      //                       <Link to={"/SignIn"}> Sign Up </Link>
      //                     </Button>
      //                   </NavLink>
      //                 </NavItem>
      //               </Nav>
      //             </div>
      //           </div>
      //         </Collapse>
      //       </div>
      //     </div>
      //   </div>
      // </Navbar>
    );
  }
}

export default NavBar;
