import React, { Component } from 'react';
import { extractDate } from "../../utils/date-extractor";
import { userActions } from "../../redux/actions/user-actions";
import { userService } from "../../redux/services/user-services";
import { connect } from "react-redux";

import "./Subject.css";

class Subject extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      last_name: "",
      email: "",
      created_at: "",
      career: "",
      role: "",
      summary: ""
    };
  }

  componentWillMount() {
    this.props.dispatch(userActions.getAll());
    this.getUserData();
  }

  async getUserData() {
    const user = await userService.getById(this.props.user.id, this.props.user.auth_token);
    this.setUserData(user);
  }

  setUserData(user) {
    const date = extractDate(user.created_at);
    const joinedDate = `${date.day} ${date.month.substring(0, 3)} ${date.year}`;
    this.setState({
      name: `${user.name} ${user.last_name}`,
      email: user.email,
      created_at: joinedDate,
      career: user.career,
      role: user.role,
      summary: user.summary
    });
  }

  render() {
    const data =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
    
    return (
      <div className="container emp-Subject">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="Subject-img">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/22/19/personal-computer-icon-minimal-style-1-vector-1892219.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="Subject-head">
                <h2>
                    Advanced Software Engineering
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
                    <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved
                         in creating and maintaining applications, frameworks, or other software components. Software development is a process of writing and 
                         maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software 
                         through to the final manifestation of the software, sometimes in a planned and structured process. Therefore, software development 
                         may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that 
                         result in software products.</p>
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

function mapStateToProps(state) {
  if (state.authentication.user) {
    const user = state.authentication.user;
    if (user) {
      return { user };
    }
  }
  return {};
}

const connectedSubjectPage = connect(mapStateToProps)(Subject);
export default connectedSubjectPage;