//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  handleSearch = e => {};

  render() {
    const { body } = this.props;
    return <div className="content">{body}</div>;
  }
}

export default Content;
