import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user-actions";

class SignUpForm extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      firstname: "",
      lastname: "",
      career_id: 1,
      role_id: 1,
      dropdownOpen: false,
      hasAgreed: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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

    if (!this.state.hasAgreed) {
      return;
    }

    const { email, password, password_confirmation, firstname, lastname, career_id, role_id } = this.state;

    const { dispatch } = this.props;
    if (firstname && lastname && email && password && password_confirmation && career_id && role_id) {
      const user = {
        firstname,
        lastname,
        email,
        password,
        password_confirmation,
        career_id,
        role_id
      };
      dispatch(userActions.register(user));
    }
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="FormField__Input"
              placeholder="Enter your first name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="FormField__Input"
              placeholder="Enter your last name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
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
            <label className="FormField__Label" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="FormField__Input"
              placeholder="Confirm your password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField career">
            <label className="FormField__Label" htmlFor="career">
              Career
            </label>
            <select
              name="career_id"
              id="career"
              onChange={this.handleChange}
              className="btn btn-outline-info career"
            >
              <option value="1">Engineering</option>
              <option value="2">Medicine</option>
              <option value="3">Architecture</option>
              <option value="4">Music</option>
              <option value="5">Physics</option>
            </select>
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
            {!this.state.hasAgreed && this.state.submitted && <p className="FormField_Label FormField__Alert">You must agree to the terms and conditions first!</p>}
          </div>

          <div className="FormField">
            <button className="FormField__Button">Sign Up</button>{" "}
            <Link to="/LogIn" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { registering } = state.registration;
  return {};
}

const connectedRegisterPage = connect(mapStateToProps)(SignUpForm);
export default connectedRegisterPage;
