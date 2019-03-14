import React, { Component } from 'react';
import { userService } from "../../../../redux/services/user-services";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SubjectModal extends Component {

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
    }
    else {
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

    var subjects = this.state.subjects.filter(subject => subject.name.includes(term));
    this.setState({
      subjectSearch: subjects
    });
  }

  addSubject = subject => {
    this.props.addsubject(subject);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={12}>
                <form
                  className="form-inline my-2 my-lg-0"
                  onSubmit={this.handleSubmitSearch}
                >
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="search-input"
                    onChange={this.updateSearchTerm}
                  />
                  <button
                    className="txt-primary btn btn-outline-info my-2 my-sm-0"
                    type="submit"
                    id="search-btn"
                    onClick={this.handleClick}
                  >
                    Search
                  </button>
                </form>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6}>
                <code>Name</code>
              </Col>
              <Col xs={3}>
                <code>ID</code>
              </Col>
              <Col xs={3}>
                <code></code>
              </Col>
            </Row>
            {this.state.subjectSearch.length === 0 && <code>No results found</code>}
            {this.state.subjectSearch.length != 0 && this.state.subjectSearch.map(subject => (
              <Row key={subject.id} className="show-grid">
                <Col xs={7}>
                  <p>{subject.name}</p>
                </Col>
                <Col xs={3}>
                  <p>{subject.id}</p>
                </Col>
                <Col xs={2}>
                  <Button onClick={() => { this.addSubject(subject) }}>Add</Button>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal >
    );
  }
}

export default SubjectModal;