import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { userService } from "../../../redux/services/user-services";
import SubjectModal from './modals/SubjectModal';
import Button from "react-bootstrap/Button";


class ProfessorContent extends Component {
  state = {
    id: 0,
    subjects: [],
    token: "",
    modalShow: false
  }

  componentDidMount() {
    this.getsubjectData();

    this.setState({
      id: this.props.id,
      token: this.props.token
    });
  }

  async getsubjectData() {
    const subjectList = await userService.getProfessorSubjects(this.props.id);
    this.setState({ subjects: subjectList.subjects });
  }

  showModal = (e) => {
    e.preventDefault();
    this.setState({
      modalShow: true
    });
  };

  hideModal = () => {
    this.setState({
      modalShow: false
    });
  };

  handleAddSubject = (subject) => {
    this.addSubject(subject.name, this.props.id, this.props.token);
  };

  async addSubject(name, id, token) {
    const response = await userService.addSubject(name, id, token);
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="col-md-8">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item col-md-6">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Current Subjects</a>
          </li>
          <li className="nav-item col-md-6">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Upcoming Sessions</a>
          </li>
        </ul>
        <div className="tab-content profile-tab" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            {this.state.subjects.length != 0 && this.state.subjects.map(subject =>
              (
                <div key={subject.id} className="row c-tutors">
                  <Link to={`/Subject/${subject.id}`} >{subject.name}</Link>
                </div>
              ))}
            <SubjectModal show={this.state.modalShow} onHide={this.hideModal} addsubject={this.addSubject} />
            <Button variant="light" onClick={this.showModal}>(+) Add more</Button>
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

export default ProfessorContent;