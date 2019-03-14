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
      email: "",
      password: "",
      password_confirmation: "",
      firstname: "",
      lastname: "",
      career_id: 1,
      role_id: 1,
      careers: [],
      dropdownOpen: false,
      hasAgreed: false,
      submitted: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.initSubjects();
      this.getCarreersInfo();
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

    this.setState({
      submitted: true
    });
    if (!this.state.passwords_match || this.state.firstname == "" || this.state.lastname == "" || this.state.email == "") {
      return;
    }
  };

  handleChange = e => {
    let target = e.target;
    // let value = target.type == "change" ? target.checked : target.value;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });

    console.log(e.target.name);

    if (target.name === "password_confirmation") {
      if (this.state.password !== value) {
        this.setState({ passwords_match: false });
      }
      else {
        this.setState({ passwords_match: true });
      }
    }
  };

  handleClose = () => {
    this.setState({
      email: "",
      password: "",
      password_confirmation: "",
      firstname: "",
      lastname: "",
      career_id: 1,
      role_id: 1,
      careers: [],
      dropdownOpen: false,
      hasAgreed: false,
      submitted: false
    });
    this.props.onHide();
  }

  async getCarreersInfo() {
    const careers = await userService.getCareers();
    this.setState({ careers });
  }

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
            Add a Professor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Professor Name</Form.Label>
                <Form.Control type="textarea" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              </Form.Group>
              {this.state.submitted && this.state.name == "" && <code>Name cannot be empty</code>}
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Professor Last Name</Form.Label>
                <Form.Control type="textarea" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
              </Form.Group>
              {this.state.submitted && this.state.last_name == "" && <code>Last name cannot be empty</code>}
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="textarea" name="email" value={this.state.email} onChange={this.handleChange} />
              </Form.Group>
              {this.state.submitted && this.state.email == "" && <code>Email cannot be empty</code>}
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
              </Form.Group>
              {this.state.submitted && !this.state.passwords_match && <code>Passwords don't match</code>}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Career</Form.Label>
                <Form.Control as="select" name="career_id" onChange={this.handleChange}>
                  {this.state.careers.length != 0 && this.state.careers.map(career =>
                    <option key={career.id} value={career.id}>{career.name}</option>
                  )}
                </Form.Control>
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
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddProfessorModal;
