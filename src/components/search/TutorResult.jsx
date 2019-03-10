import React, { Component } from 'react';
import { userService } from "../../redux/services/user-services";
import { Link } from "react-router-dom"

class TutorResult extends Component {
  constructor() {
    super();

    this.state = {
      subjects: []
    };
  }

  componentDidMount() {
    this.getSubjectsData();
  }

  async getSubjectsData() {
    const response = await userService.getProfessorSubjects(this.props.id);
    const subjectList = response.subjects;

    this.setState({
      subjects: { subjectList }
    });
  }

  render() {
    return (
      <div>
        <h4>
          <Link to={`/Professor/${this.props.id}`} params={{ id: this.props.id }} className="text-search">{`${this.props.name} ${this.props.last_name}`}</Link>
        </h4>
        {this.state.subjects.subjectList && this.state.subjects.subjectList.slice(0, 3).map(subject => (
          <p key={subject.id}>{subject.name}</p>
        ))}
      </div>
    );
  }
}

export default TutorResult;