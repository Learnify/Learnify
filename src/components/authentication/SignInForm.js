import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/user-actions";

// import Authentication from "./authentication.css";

class SignInForm extends Component {
  constructor() {
    super();

    if (this.props) {
      this.props.dispatch(userActions.logout());
    }

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/SignIn" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { loggingIn } = state.authentication;
  return {};
}

const connectedLoginPage = connect(mapStateToProps)(SignInForm);
export default connectedLoginPage;
