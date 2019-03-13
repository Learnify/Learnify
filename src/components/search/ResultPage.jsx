import React, { Component } from 'react';
import { Button } from "reactstrap";
import Tutor from "./TutorResult";
import Subject from "./SubjectResult";
import { userService } from "../../redux/services/user-services";
import { Redirect } from 'react-router-dom';
import "./search-styles.css";
import { connect } from "react-redux";

class ResultPage extends Component {

    constructor() {
        super();
        this.state = {
            tutors: { 0: "No existe el profesor" },
            subjects: { 0: "No existe el profesor" },
            loading: false
        };
    }

    componentDidMount() {
        this.getSubjectData();
        this.getProfessorData();
    }

    async getSubjectData() {
        this.setState({ loading: true });
        const subjectList = await userService.getSubjects(this.props.match.params.searchTerm);
        this.setState({
            subjects: {
                ...subjectList
            }
        });
        this.setState({ loading: false });
    }

    async getProfessorData() {
        this.setState({ loading: true });
        const user = await userService.getProfessors(this.props.match.params.searchTerm);
        this.setState({
            tutors: {
                ...user
            }
        });
        this.setState({ loading: false });
    }

    render() {

        const searchTerm = this.props.match.params.searchTerm;
        if (!searchTerm) {
            return (<Redirect to={{ pathname: '/' }} />);
        }

        if (this.state.loading) {
            return (<div>Loading the results...</div>);
        }

        const tutorResults = Object.values(this.state.tutors).filter(function (value, index, arr) {
            return value.id !== 1;
        });;
        const subjectResults = Object.values(this.state.subjects);

        if (tutorResults[0] == "No existe el profesor" && subjectResults[0] == "No existe el profesor") {
            return (<div>Your search doesn't match any result</div>);
        }

        const tutorsFound = tutorResults.reduce(function (result, value, index, array) {
            if (index % 2 === 0)
                result.push(array.slice(index, index + 2));
            return result;
        }, []);
        const subjectsFound = subjectResults.reduce(function (result, value, index, array) {
            if (index % 2 === 0)
                result.push(array.slice(index, index + 2));
            return result;
        }, []);

        return (
            <div className="container search-results">
                <div className="row container-row">
                    {(tutorsFound[0] != "No existe el profesor" || tutorsFound[0][0] != "No existe el profesor") &&
                        <div className="col-sm-4 tutors-found-pics">
                            <h1>Tutors found</h1>
                            <div className="profile-mashup">
                                {tutorsFound.slice(0, 2).map(tutorPair => (
                                    <div key={tutorPair[0].id} className="row profile-mashup-row">
                                        {tutorPair.map(tutor => (
                                            <img key={tutor.id} className="profile-mashup-img" src={tutor.profile_pic} alt="" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                            {tutorResults.length > 4 && <Button outline color="info">See all</Button>}
                        </div>
                    }
                    {(tutorsFound[0] != "No existe el profesor" || tutorsFound[0][0] != "No existe el profesor") &&
                        <div className="col-sm-8 tutors-found-list">
                            <ul>
                                {tutorResults.slice(0, 4).map(tutor => (
                                    <li key={tutor.id}>
                                        <Tutor name={tutor.name} last_name={tutor.last_name} id={tutor.id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <div className="row container-row">
                    {(subjectsFound[0] != "No existe el profesor" || subjectsFound[0][0] != "No existe el profesor") &&
                        <div className="col-sm-4 tutors-found-pics">
                            <h1>Subjects found</h1>
                            <div className="profile-mashup">
                                {subjectsFound.slice(0, 2).map(subjectPair => (
                                    <div key={subjectPair[0].id} className="row profile-mashup-row">
                                        {subjectPair.map(subject => (
                                            <img key={subject.id} className="profile-mashup-img" src={subject.icon} alt="" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                            {subjectResults.length > 4 && <Button outline color="info">See all</Button>}
                        </div>
                    }
                    {(subjectsFound[0] != "No existe el profesor" || subjectsFound[0][0] != "No existe el profesor") &&
                        <div className="col-sm-8 tutors-found-list">
                            <ul>
                                {subjectResults.slice(0, 4).map(subject => (
                                    <li key={subject.id}>
                                        <Subject name={subject.name} id={subject.id} url={subject.url} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     if (state.authentication.user) {
//         const user = state.authentication.user;
//         if (user) {
//             return { user };
//         }
//     }
//     return {};
// }

// const connectedResultPage = connect(mapStateToProps)(ResultPage);
// export default connectedResultPage;
export default ResultPage;