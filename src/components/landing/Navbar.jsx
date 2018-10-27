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

import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand text-primary" href="#">
          Learnify
        </a>
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
              <Link className="nav-link text-secondary" to={"/Contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to={"/Blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item mx-auto pr-sm-2">
              <Link
                className="nav-link text-primary btn btn-outline-primary auth-button"
                to={"/LogIn"}
              >
                LogIn
              </Link>
            </li>
            <li class="nav-item mx-auto">
              <Link
                className="nav-link text-primary btn btn-outline-primary auth-button"
                to={"/SignIn"}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
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
