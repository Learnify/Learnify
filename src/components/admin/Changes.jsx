import React, { Component } from 'react';
import "./Changes.css";

class Changes extends Component{
    render(){
        return(
            <div className='container con-matter'>
                
                <div className="head">
                    <h1>Current...</h1>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item col-md-6">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#matter" role="tab" aria-controls="home" aria-selected="true">Current Subjects</a>
                        </li>
                        <li className="nav-item col-md-6">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#professor" role="tab" aria-controls="profile" aria-selected="false">Current Professors</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content matter-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="matter" role="tabpanel" aria-labelledby="matter-tab">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-8"><h2>Subjects <b>Details</b></h2></div>
                                    <div class="col-sm-4">
                                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>Administration</td>
                                        <td>(171) 555-2222</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Peter Parker</td>
                                        <td>Customer Service</td>
                                        <td>(313) 555-5735</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fran Wilson</td>
                                        <td>Human Resources</td>
                                        <td>(503) 555-9931</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>      
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="tab-pane fade show" id="professor" role="tabpanel" aria-labelledby="professor-tab">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-8"><h2>Professors <b>Details</b></h2></div>
                                    <div class="col-sm-4">
                                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>Administration</td>
                                        <td>(171) 555-2222</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Peter Parker</td>
                                        <td>Customer Service</td>
                                        <td>(313) 555-5735</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fran Wilson</td>
                                        <td>Human Resources</td>
                                        <td>(503) 555-9931</td>
                                        <td>
                                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>      
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Changes;
