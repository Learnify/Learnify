import React, { Component } from "react";
import { extractDate } from "../../utils/date-extractor";
import { userActions } from "../../redux/actions/user-actions";
import { userService } from "../../redux/services/user-services";
import StudentContent from "./profile-content/student";
import ProfessorContent from "./profile-content/professor";
import AdminContent from "./profile-content/admin";
import { connect } from "react-redux";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      last_name: "",
      email: "",
      created_at: "",
      career: "",
      id: "",
      role: ""
    };
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
    this.getUserData();
  }

  async getUserData() {
    const user = await userService.getById(
      this.props.user.id,
      this.props.user.auth_token
    );
    this.setUserData(user);
  }

  setUserData(user) {
    const date = extractDate(user.created_at);
    const joinedDate = `${date.day} ${date.month.substring(0, 3)} ${date.year}`;
    this.setState({
      name: `${user.name} ${user.last_name}`,
      email: user.email,
      created_at: joinedDate,
      career: user.career,
      role: user.role,
      id: this.props.user.id
    });
  }

  render() {
    var content = <p>Loading...</p>;
    if (this.state.role.name == "Profesor") {
      if (this.state.id === 1) {
        content = (
          <AdminContent token={this.props.user.auth_token} id={this.state.id} />
        );
      } else {
        content = (
          <ProfessorContent
            token={this.props.user.auth_token}
            id={this.state.id}
          />
        );
      }
    } else if (this.state.role.name == "Estudiante") {
      content = <StudentContent id={this.state.id} />;
    }

    return (
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-head">
                <h2>{this.state.name}</h2>
                <p>Male. Bogotá D.C. Colombia</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h4>{this.state.name}</h4>
                <ul>
                  <li>
                    <b>Email:</b>
                    <br />
                    {this.state.email}
                  </li>
                  <li>
                    <b>Member Since:</b>
                    <br />
                    {this.state.created_at}
                  </li>
                  <li>
                    <b>Career:</b>
                    <br />
                    {this.state.career.name}
                  </li>
                  <li>
                    <b>Role:</b>
                    <br />
                    {this.state.role.name}
                  </li>
                </ul>
              </div>
            </div>
            {content}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.authentication.user) {
    const user = state.authentication.user;
    if (user) {
      return { user };
    }
  }
  return {};
}

const connectedProfilePage = connect(mapStateToProps)(Profile);
export default connectedProfilePage;
