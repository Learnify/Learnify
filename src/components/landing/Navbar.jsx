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
import "../../styles/landing/navbar.css";

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
              <NavbarBrand className="learnify-navbar all" href="/">
                Learnify
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
                    <NavLink className="all" href="/components/">
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <div className="navbar-blog">
                      <NavLink className="all" href="/components/">
                        Blog
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/" className="auth-button">
                      <Button color="info" outline>
                        Login
                      </Button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/" className="auth-button">
                      <Button color="info" outline>
                        Sign Up
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
