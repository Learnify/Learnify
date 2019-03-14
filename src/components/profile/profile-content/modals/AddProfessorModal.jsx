import React, { Component } from "react";
import { userService } from "../../../../redux/services/user-services";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class AddProfessorModal extends Component {
  constructor() {
    super();

    this.state = {
      subjects: [],
      subjectSearch: [],
      searchTerm: ""
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

    this.getSubjectData(e.target.value);
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
    console.log("Submitted!");
  };

  addSubject = subject => {
    this.props.addsubject(subject);
  };

  render() {
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject Name</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject Description</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Professor ID</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Button variant="primary" type="submit">
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

export default AddProfessorModal;
