import React, { Component } from 'react';
import "./search-styles.css";

class ResultPage extends Component {

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h1>Tutors found</h1>
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            <li>Tutor 1</li>
                            <li>Tutor 2</li>
                            <li>Tutor 3</li>
                            <li>Tutor 4</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h1>Subjects found</h1>
                </div>
            </div>
        );
    }
}
 
export default ResultPage;