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

    componentWillMount() {
        this.getSubjectData();
        this.getProfessorData();
    }

    async getSubjectData() {
        this.setState({ loading: true });
        const subjectList = await userService.getSubjects(this.props.location.searchTerm);
        this.setState({
            subjects: {
                ...subjectList
            }
        });
        // console.log(this.state);
        this.setState({ loading: false });
    }

    async getProfessorData() {
        this.setState({ loading: true });
        const user = await userService.getProfessors(this.props.location.searchTerm);
        this.setState({
            tutors: {
                ...user
            }
        });
        // console.log(this.state);
        this.setState({ loading: false });
    }

    render() {

        const searchTerm = this.props.location.searchTerm;
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

        if (tutorResults[0] === "No existe el profesor" && subjectResults[0] === "No existe el profesor") {
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
                    {tutorsFound[0] !== "No existe el profesor" &&
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
                    {tutorsFound[0] !== "No existe el profesor" &&
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
                    {subjectsFound[0] !== "No existe el profesor" &&
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
                    {subjectsFound[0] !== "No existe el profesor" &&
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

const tutors = [
    {
        name: "Jairo Hernan Aponte Melo",
        profile_pic: "http://www.docentes.unal.edu.co/jhapontem/Jairo%202.jpg",
        subjects: ["OOP", "Data Structures", "Software Engineering", "Algoritms"],
        profile_url: "/Login"
    },
    {
        name: "Gordon Ramsay",
        profile_pic: "https://s2.r29static.com//bin/entry/884/340x408,85/1768926/image.jpg",
        subjects: ["Lobster", "French desserts", "Caviar", "Steak"],
        profile_url: "/Login"
    },
    {
        name: "Felipe Restrepo Calle",
        profile_pic: "http://dis.unal.edu.co/~ferestrepoca/img/frc_pic.jpg",
        subjects: ["Programming Languajes", "ANTLR4", "Code structuring", "Yacc"],
        profile_url: "/Login"
    },
    {
        name: "Malala Yousafzai",
        profile_pic: "https://i2.wp.com/feminisminindia.com/wp-content/uploads/2017/12/images_malala-y.jpg?fit=2048%2C1152&ssl=1",
        subjects: ["Education for change"],
        profile_url: "/Login"
    },
    {
        name: "Linus Torvalds",
        profile_pic: "https://avatars0.githubusercontent.com/u/1024025?s=460&v=4",
        subjects: ["Linux Development", "Advanced C", "C Compilation"],
        profile_url: "/Login"
    },
    {
        name: "Linus Sebastian",
        profile_pic: "https://specials-images.forbesimg.com/imageserve/5a394434a7ea4314ae854b93/416x416.jpg?background=000000&cropX1=231&cropX2=1067&cropY1=64&cropY2=900",
        subjects: ["PC Building", "Dem RGB Light", "PC Repairing"],
        profile_url: "/Login"
    },
    {
        name: "Diana Uribe",
        profile_pic: "https://pacifista.tv/wp-content/uploads/2018/09/Diana-Uribe-1.png",
        subjects: ["Historia Romana", "Historia Griega", "Historia del siglo XX"],
        profile_url: "/Login"
    }
];

const subjects = [
    {
        name: "Math",
        icon: "https://image.flaticon.com/icons/png/512/43/43102.png",
        url: "/"
    },
    {
        name: "Physics",
        icon: "https://image.flaticon.com/icons/png/512/100/100550.png",
        url: "/"
    },
    {
        name: "Bakery",
        icon: "https://image.flaticon.com/icons/png/512/93/93093.png",
        url: "/"
    },
    {
        name: "Medicine",
        icon: "https://image.flaticon.com/icons/png/512/27/27164.png",
        url: "/"
    },
    {
        name: "C Compilation",
        icon: "https://image.flaticon.com/icons/png/512/106/106842.png",
        url: "/"
    },
    {
        name: "Advanced C",
        icon: "https://image.flaticon.com/icons/png/512/106/106842.png",
        url: "/"
    },
    {
        name: "OOP",
        icon: "https://image.flaticon.com/icons/png/512/14/14427.png",
        url: "/"
    },
    {
        name: "Data Structures",
        icon: "https://image.flaticon.com/icons/png/512/26/26042.png",
        url: "/"
    },
    {
        name: "Data Management",
        icon: "https://image.flaticon.com/icons/png/512/38/38811.png",
        url: "/"
    },
    {
        name: "Data Analysis with Python",
        icon: "https://image.freepik.com/free-icon/python-language_318-1898.jpg",
        url: "/"
    },
    {
        name: "Data Analysis with R",
        icon: "https://image.flaticon.com/icons/png/512/13/13706.png",
        url: "/"
    }
];

const citation = (<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>);

function mapStateToProps(state) {
    if (state.authentication.user) {
        const user = state.authentication.user;
        if (user) {
            return { user };
        }
    }
    return {};
}

const connectedResultPage = connect(mapStateToProps)(ResultPage);
export default connectedResultPage;
// export default ResultPage;