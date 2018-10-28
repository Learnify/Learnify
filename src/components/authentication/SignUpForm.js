import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";

class SignUpForm extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      career: "",
      dropdownOpen: false,
      hasAgreed: false
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

    console.log(value);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // const options = {
    //   method: "POST",
    //   body: JSON.stringify(this.state)
    // };

    console.log("The form was submitted with the following data:");
    console.log(this.state);
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
          <div className="FormField career">
            <label className="FormField__Label" htmlFor="career">
              Career
            </label>
            <Input
              type="select"
              name="career"
              id="career"
              onChange={this.handleChange}
              className="FormField_Input"
            >
              <option value="1">Engineering</option>
              <option value="2">Medicine</option>
              <option value="3">Architecture</option>
              <option value="4">Music</option>
              <option value="5">Physics</option>
            </Input>
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
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
