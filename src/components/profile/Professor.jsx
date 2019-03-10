import React, { Component } from 'react';
import { userService } from "../../redux/services/user-services";
import SubjectResult from "../search/SubjectResult";

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
      role: "",
      id: 0,
      subjects: []
    };
  }

  componentDidMount() {
    this.getUserData();
    this.getSubjectsData();
  }

  async getUserData() {
    const user = await userService.getProfessorPublicProfile(this.props.match.params.id);
    this.setState({
      ...user
    });
  }

  async getSubjectsData() {
    const subjectList = await userService.getProfessorSubjects(this.props.match.params.id);
    this.setState({ subjects: subjectList.subjects });
    console.log(this.state);
  }

  render() {

    return (
      <div className="container emp-Professor">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="Professor-img">
                <img src="" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="Professor-head">
                <h2>
                  {`${this.state.name} ${this.state.last_name}`}
                </h2>
                <p>{this.state.career.name}</p>
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
                <h4>{`${this.state.name} ${this.state.last_name}`}</h4>
                <ul>
                  <li><b>Email:</b><br />{this.state.email}</li>
                  <li><b>Role:</b><br />{this.state.role.name}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content Professor-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row c-tutors">
                    <ul>
                      {
                        this.state.subjects.map(subject => (
                          <SubjectResult key={subject.id} name={subject.name} id={subject.id} />
                        ))
                      }
                    </ul>
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

export default Professor;