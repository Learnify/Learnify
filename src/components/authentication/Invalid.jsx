import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user-actions";

class Invalid extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Invalid Credentials</h1>
        <ul>
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
      </div>
    );
  }
}

export default Invalid;