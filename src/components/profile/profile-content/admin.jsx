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
    subjectModalShow: false
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

  showSubjectModal = e => {
    e.preventDefault();
    this.setState({
      subjectModalShow: true
    });
  };

  hideSubjectModal = () => {
    this.setState({
      subjectModalShow: false
    });
  };

  handleAddSubject = subject => {
    this.addSubject(subject.name, this.props.id, this.props.token);
  };

  async addSubject(name, id, token) {
    const response = await userService.addSubject(name, id, token);
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
                    <Link to={`/Subject/${tutor.id}`}>{tutor.name}</Link>
                  </Col>
                  <Col xs={2}>{tutor.id}</Col>
                </Row>
              ))}
            <AddProfessorModal
              show={this.state.subjectModalShow}
              onHide={this.hideModal}
              addsubject={this.addSubject}
            />
            <Button variant="light" onClick={this.showModal}>
              (+) Add more
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminContent;
