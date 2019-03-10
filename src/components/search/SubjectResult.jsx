import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { userService } from "../../redux/services/user-services";

class SubjectResult extends Component {
  render() {
    return (
      <div>
        <h5>
          <Link to={`/Subject/${this.props.id}`} className="text-search">{this.props.name}</Link>
        </h5>
      </div>
    );
  }
}

export default SubjectResult;