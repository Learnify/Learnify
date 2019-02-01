import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SubjectResult extends Component {
  render() {
    return (
      <div>
        <h5>
          <Link to="#" className="text-search">{this.props.name}</Link>
        </h5>
      </div>
    );
  }
}

export default SubjectResult;