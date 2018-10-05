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

import { Link } from 'react-router-dom';
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
      <Navbar light expand="md">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-3" align="left">
              <NavbarBrand className="learnify-navbar all">
                <Link to={'/'}>Learnify</Link>
              </NavbarBrand>
            </div>
            <div className="col-sm-6 col-6">
              <FormGroup className="search-container w-100 md-0 active-cyan-3 active-cyan-4">
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="search for tutoring..."
                />
              </FormGroup>
            </div>
            <div className="col-sm-3 col-3">
              <NavbarToggler className="mr2" onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto navbar-inverse" navbar>
                  <NavItem>
                    <NavLink className="all">
                      <Link to={'/Contact'}>Contact</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <div className="navbar-blog">
                      <NavLink className="all">
                        <Link to={'/Blog'}>Blog</Link>
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLink className="auth-button">
                      <Button color="info" outline>
                        <Link to={'/Authentication/LogIn'}>LogIn</Link>
                      </Button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="auth-button">
                      <Button color="info" outline>
                        <Link to = {'/Authentication/SingIn'}> Sign Up </Link>
                      </Button>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
