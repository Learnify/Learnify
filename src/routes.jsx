//Depencencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Landing from './components/landing/Lading';
import Profile  from './components/profile/Profile';
import Page404 from './components/Page404';
import SignInForm from './components/authentication/SignInForm';
import SignUpForm from './components/authentication/SignUpForm';
import Authentication from './components/authentication/authentication';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';

const AppRouters = () => 
    <App>
        <Switch>
            {/* <Route exact path='/Profile' component={Profile}/> */}
            <Route exact path='/Authentication' component={Authentication}/>
            <Route exact path='/LogIn' component={SignInForm}/>
            <Route exact path='/SingIn' component={SignUpForm}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/Blog' component={Blog}/>
            <Route exact path='/' component={Landing}/>
            <Route component={Page404}/>
        </Switch>
    </App>;

export default AppRouters;