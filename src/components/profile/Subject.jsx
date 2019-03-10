import React, { Component } from 'react';
import { userService } from "../../redux/services/user-services";

import "./Subject.css";

class Subject extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      summary: ""
    };
  }

  componentDidMount() {

    this.getInfo();
  }

  async getInfo() {
    const info = await userService.getSubject(this.props.match.params.id);
    this.setState({
      ...info
    });
  }

  render() {

    return (
      <div className="container emp-Subject">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="Subject-img">
                {/* <img src="https://cdn5.vectorstock.com/i/1000x1000/22/19/personal-computer-icon-minimal-style-1-vector-1892219.jpg" alt="" /> */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="Subject-head">
                <h2>
                  {this.state.name}
                </h2>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Summary</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content Subject-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row c-tutors">
                    <p>{this.state.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Subject;