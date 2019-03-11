import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userService } from "../../redux/services/user-services";

// import Authentication from "./authentication.css";

class PasswordReset extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const result = await userService.resetPassword(this.state.email);
    if (result.status === "ok") {
      this.setState({ submitted: true });
    }
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className="FormCenter">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="New">
              An email has been sent to your account with a link to reset your
              password
            </label>
            <p>Hurry up! The link will expire in 4 hours</p>
          </div>
        </div>
      );
    }

    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="New">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="user@example.com"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Send Email</button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordReset;
