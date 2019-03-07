import React, { Component } from 'react';
import { extractDate } from "../../utils/date-extractor";
import { userActions } from "../../redux/actions/user-actions";
import { userService } from "../../redux/services/user-services";
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
      role: ""
    };
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
    this.getUserData();
  }

  async getUserData() {
    const user = await userService.getById(this.props.user.id, this.props.user.auth_token);
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
      role: user.role
    });
  }

  render() {
    return (
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="https://scontent.fbog6-1.fna.fbcdn.net/v/t1.0-9/31655693_10156536863843394_8634308845482541056_o.jpg?_nc_cat=105&_nc_ht=scontent.fbog6-1.fna&oh=2c169cb07897ca8d28538c085e11187f&oe=5CF86F9D" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-head">
                <h2>
                  {this.state.name}
                </h2>
                <p>Male. Bogotá D.C. Colombia</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item col-md-6">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Current Tutors</a>
                  </li>
                  <li className="nav-item col-md-6">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Upcoming Sessions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h4>{this.state.name}</h4>
                <ul>
                  <li><b>Email:</b><br />{this.state.email}</li>
                  <li><b>Member Since:</b><br />{this.state.created_at}</li>
                  <li><b>Career:</b><br />{this.state.career.name}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row c-tutors">
                    <div className="col-md-6">
                      <label>Name Tutor<br />Class Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Jairo Aponte<br />Advanced Software Engineering</p>
                    </div>
                  </div>
                  <div className="row c-tutors">
                    <div className="col-md-6">
                      <label>Name Tutor<br />Class Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Felipe Restrepo<br />Programing Languajes</p>
                    </div>
                  </div>
                  <div className="row c-tutors">
                    <div className="col-md-6">
                      <label>Name Tutor<br />Class Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Helga Duarte<br />Information Systems</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row u-sessions">
                    <div className="col-md-6">
                      <label>Jairo Aponte</label>
                    </div>
                    <div className="col-md-6">
                      <p>Rest API's</p>
                    </div>
                  </div>
                  <div className="row u-sessions">
                    <div className="col-md-6">
                      <label>Jairo Aponte</label>
                    </div>
                    <div className="col-md-6">
                      <p>Branching in GitHub</p>
                    </div>
                  </div>
                  <div className="row u-sessions">
                    <div className="col-md-6">
                      <label>Jairo Aponte</label>
                    </div>
                    <div className="col-md-6">
                      <p>AST Syntax</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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