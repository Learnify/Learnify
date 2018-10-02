//Depencencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Landing from './components/landing/Lading';
import Profile  from './components/profile/Profile';
import Form  from './components/loginSingin/Form';
import Page404 from './components/Page404';

const AppRouters = () => 
    <App>
        <Switch>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/Form' component={Form}/>
            <Route exact path='/' component={Landing}/>
            <Route component={Page404}/>
        </Switch>
    </App>;

export default AppRouters;