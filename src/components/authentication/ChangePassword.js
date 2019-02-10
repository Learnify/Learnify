import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/user-actions";

// import Authentication from "./authentication.css";

class ChangePassword extends Component {
  constructor() {
    super();

/*    if (this.props) {
      this.props.dispatch(userActions.logout());
    }*/

    this.state = {
      Actual: "",
      New: "",
      Confirm: ""
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
    const { Actual, New, Confirm } = this.state;
    const { dispatch } = this.props;

/*    if (Actual && New && Confirm) {
      dispatch(userActions.login(Actual, New, Confirm));
    }*/
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
            <label className="FormField__Label" htmlFor="Actual">
              Actual Password
            </label>
            <input
              type="Actual"
              id="Actual"
              className="FormField__Input"
              placeholder="Enter your actual password"
              name="Actual"
              value={this.state.Actual}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="New">
                New Password
            </label>
            <input
              type="New"
              id="New"
              className="FormField__Input"
              placeholder="Enter your new password"
              name="New"
              value={this.state.New}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Confirm">
                Confirm Password
            </label>
            <input
              type="Confirm"
              id="Confirm"
              className="FormField__Input"
              placeholder="Confirm your new password"
              name="Confirm"
              value={this.state.Confirm}
              onChange={this.handleChange}
            />
          </div>

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
