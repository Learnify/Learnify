import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from "../../../redux/services/user-services";
import AddSubjectModal from "./modals/AddSubjectModal";
import AddProfessorModal from "./modals/AddProfessorModal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AdminContent extends Component {
  state = {
    id: 0,
    subjects: [],
    tutors: [],
    token: "",
    subjectModalShow: false,
    tutorModalShow: false
  };

  componentDidMount() {

    this.getsubjectData();
    this.getTutorsData();

    this.setState({
      id: this.props.id,
      token: this.props.token
    });
  }

  async getsubjectData() {
    const subjectList = await userService.getAllSubjects();
    this.setState({ subjects: subjectList });
  }

  async getTutorsData() {
    const tutorList = await userService.getAllProfessors();
    this.setState({ tutors: tutorList.filter(tutor => tutor.id != 1) });
  }

  showSubjectModal = () => {
    this.setState({
      subjectModalShow: true
    });
  };

  hideSubjectModal = () => {
    // console.log("Hidden");
    this.setState({
      subjectModalShow: false
    });
  };

  showTutorModal = () => {
    this.setState({
      tutorModalShow: true
    });
  };

  hideTutorModal = () => {
    this.setState({
      tutorModalShow: false
    });
  };

  handleAddSubject = subject => {
    this.addSubject(subject, this.props.token);
  };

  async addSubject(subject, token) {
    const response = await userService.createSubject(subject.name, subject.summary, subject.user_id, this.props.token);
    if (response.id) {
      this.getsubjectData();
      const asociate = await userService.addSubject(subject.name, subject.user_id, token);
    }
  }

  render() {
    return (
      <div className="col-md-8">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item col-md-6">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Current Subjects
            </a>
          </li>
          <li className="nav-item col-md-6">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Current Tutors
            </a>
          </li>
        </ul>
        <div className="tab-content profile-tab" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Row className="show-grid">
              <Col xs={10}>
                <code>Name</code>
              </Col>
              <Col xs={2}>
                <code>ID</code>
              </Col>
            </Row>
            {this.state.subjects.length != 0 &&
              this.state.subjects.map(subject => (
                <Row key={subject.id} className="show-grid">
                  <Col xs={10}>
                    <Link to={`/Subject/${subject.id}`}>{subject.name}</Link>
                  </Col>
                  <Col xs={2}>{subject.id}</Col>
                </Row>
              ))}
            <AddSubjectModal
              show={this.state.subjectModalShow}
              onHide={this.hideSubjectModal}
              addsubject={this.addSubject}
              tutors={this.state.tutors}
              onSubmit={this.handleAddSubject}
            />
            <Button variant="light" onClick={this.showSubjectModal}>
              (+) Add more
            </Button>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Row className="show-grid">
              <Col xs={10}>
                <code>Name</code>
              </Col>
              <Col xs={2}>
                <code>ID</code>
              </Col>
            </Row>
            {this.state.tutors.length != 0 &&
              this.state.tutors.map(tutor => (
                <Row key={tutor.id} className="show-grid">
                  <Col xs={10}>
                    <Link to={`/Professor/${tutor.id}`}>{tutor.name}</Link>
                  </Col>
                  <Col xs={2}>{tutor.id}</Col>
                </Row>
              ))}
            <AddProfessorModal
              show={this.state.tutorModalShow}
              onHide={this.hideTutorModal}
              addsubject={this.addSubject}
            />
            <Button variant="light" onClick={this.showSubjectModal}>
              (+) Add more
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminContent;
