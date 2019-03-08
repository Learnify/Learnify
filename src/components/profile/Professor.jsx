import React, { Component } from 'react';
import { extractDate } from "../../utils/date-extractor";
import { userActions } from "../../redux/actions/user-actions";
import { userService } from "../../redux/services/user-services";
import { connect } from "react-redux";

import "./Professor.css";

class Professor extends Component {

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
    const data =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
    
    return (
      <div className="container emp-Professor">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="Professor-img">
                <img src="https://i1.rgstatic.net/ii/profile.image/272496691773460-1441979682657_Q512/Jairo_Aponte.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="Professor-head">
                <h2>
                  Jairo Aponte
                </h2>
                <p>Professor of Software Development</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Current Courses</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="Professor-work">
                <h4>Jairo_Aponte</h4>
                <ul>
                  <li><b>Email:</b><br />jhapontem@unal.edu.co</li>
                  <li><b>Member Since:</b><br />{this.state.created_at}</li>
                  <li><b>Career:</b><br />{this.state.career.name}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content Professor-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row c-tutors">
                    <li>Advanced Software Engineering</li>
                    <li>Software Development II</li>
                    <li>Advanced Software Engineering</li>
                    <li>Advanced Software Engineering</li>
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

const connectedProfessorPage = connect(mapStateToProps)(Professor);
export default connectedProfessorPage;