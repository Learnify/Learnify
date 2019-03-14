import React, { Component } from 'react';

class StudentContent extends Component {
  state = {}
  render() {
    return (
      <div className="col-md-8">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item col-md-6">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Current Tutors</a>
          </li>
          <li className="nav-item col-md-6">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Upcoming Sessions</a>
          </li>
        </ul>
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
    );
  }
}

export default StudentContent;