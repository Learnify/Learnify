import React, { Component } from "react";
import { userService } from "../../../../redux/services/user-services";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class AddSubjectModal extends Component {
  constructor() {
    super();

    this.state = {
      subjects: [],
      subjectSearch: [],
      searchTerm: "",
      selectedTutor: "",
      name: "",
      description: "",
      submitted: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.initSubjects();
    } else {
      this.setState({
        subjects: [],
        searchTerm: "",
        subjectSearch: this.state.subjects
      });
    }
  }

  async initSubjects() {
    const subjects = await userService.getAllSubjects();
    this.setState({
      subjects,
      subjectSearch: subjects
    });
  }

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  getSubjectData(term) {
    var subjects = this.state.subjects.filter(subject =>
      subject.name.includes(term)
    );
    this.setState({
      subjectSearch: subjects
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      submitted: true
    });

    if (this.state.name == "" || this.state.description == "" || this.state.selectedTutor == "") {
      return;
    }

    const subject = {
      name: this.state.name,
      summary: this.state.description,
      user_id: this.state.selectedTutor.id
    };

    this.props.onSubmit(subject);
    this.props.onHide();
  };

  addSubject = subject => {
    this.props.addsubject(subject);
  };

  setTutor(tutor) {
    this.setState({
      selectedTutor: tutor
    });
  }

  updateDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  updateName = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {

    const tutors = this.props.tutors.filter(tutor => tutor.name.includes(this.state.searchTerm));

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a Subject
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject Name</Form.Label>
                <Form.Control type="textarea" onChange={this.updateName} />
                {this.state.submitted && this.state.name == "" && <code>Name cannot be empty</code>}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject Description</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={this.updateDescription} />
                {this.state.submitted && this.state.description == "" && <code>Description cannot be empty</code>}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Choose a Professor</Form.Label>
                <Row>
                  <Col sm={4}>
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      id="search-input"
                      onChange={this.updateSearchTerm}
                    />
                  </Col>
                  <Col sm={1}>
                  </Col>
                  <Col sm={7}>
                    {tutors.map(tutor => (
                      <Form.Check
                        type="radio"
                        label={`${tutor.name} ${tutor.last_name}`}
                        name="formHorizontalRadios"
                        id={tutor.id}
                        key={tutor.id}
                        onChange={() => this.setTutor(tutor)}
                      />
                    ))}
                  </Col>
                </Row>
                {this.state.submitted && this.state.selectedTutor == "" && <code>You have to chose one tutor</code>}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddSubjectModal;
