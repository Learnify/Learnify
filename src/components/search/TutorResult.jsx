import React, { Component } from 'react';
import { Link } from "react-router-dom"

class TutorResult extends Component {

  render() {
    return (
      <div>
        <h4>
          <Link to="#" className="text-primary">{this.props.name}</Link>
        </h4>
        {this.props.subjects.slice(0, 3).map(name => (
          <p>{name}</p>
        ))}
      </div>
    );
  }
}

export default TutorResult;