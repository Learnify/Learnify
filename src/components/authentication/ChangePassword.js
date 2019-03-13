import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import { userService } from "../../redux/services/user-services";

// import Authentication from "./authentication.css";

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      token: "",
      submitted: false,
      sent: false,
      successful: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      token: this.props.match.params.token,
      email: this.props.match.params.email
    });
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    });

    if (this.state.email === "" || this.state.password !== this.state.password_confirmation) {
      return;
    }

    this.handlePasswordChange();
  }

  async handlePasswordChange() {
    const response = await userService.changePassword(this.state.email, this.state.password, this.state.token);

    console.log(response);

    const success = response.status === "ok" ? true : false;
    this.setState({
      sent: true,
      successful: success
    });
  }

  render() {

    if (this.state.sent) {
      if (this.state.successful) {
        return (
          <div className="FormCenter">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Password recovered successfully!
              </label>
              <Link
                to="/Login"
                className="FormField__Link"
              >
                Login
              </Link>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="FormCenter">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email not found
              </label>
              <Link
                to="/"
                className="FormField__Link"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label htmlFor="email">
              Reset the password for: {this.state.email}
            </label>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="New">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your new password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Confirm">
              Confirm New Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="FormField__Input"
              placeholder="Confirm your new password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </div>
          {this.state.email === "" && this.state.submitted && <p>Email field cannot be empty</p>}
          {this.state.password !== this.state.password_confirmation && this.state.submitted && <p>Passwords don't match</p>}

          <div className="FormField">
            <button className="FormField__Button mr-20">Change Password</button>{" "}
          </div>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(ChangePassword);
export default connectedLoginPage;
