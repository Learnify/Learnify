<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
=======
//Dependencies
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
// import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRoutes/>
    </Router>, 
    document.getElementById('root')
);
>>>>>>> c4850105f33750723c18483ad93507696b16658c
registerServiceWorker();
