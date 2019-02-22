import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/user-actions";

class AddSubject extends Component {
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
      <div className="container ">
        Add Subjects
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(AddSubject);
export default connectedRegisterPage;