//Depencencies
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Components
import App from "./components/App";
import Landing from "./components/landing/Lading";
import Profile from "./components/profile/Profile";
import Professor from "./components/profile/Professor";
import Subject from "./components/profile/Subject";
import Page404 from "./components/Page404";
import SignInForm from "./components/authentication/SignInForm";
import SignUpForm from "./components/authentication/SignUpForm";
import SignUpProf from "./components/authentication/SignUpProf";
import ChangePassword from "./components/authentication/ChangePassword";
import Authentication from "./components/authentication/authentication";
import Contact from "./components/contact/contact";
import Admin from "./components/admin/Changes";
import Blog from "./components/blog/blog";
import ResultPage from "./components/search/ResultPage";
import AddSubject from "./components/add/add-subject";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/Authentication" component={Authentication} />
      <Route exact path="/LogIn" component={SignInForm} />
      <Route exact path="/SignIn" component={SignUpForm} />
      <Route exact path="/SignUpProf" component={SignUpProf} />
      <Route exact path="/ChangePassword" component={ChangePassword} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Results" component={ResultPage} />
      <Route exact path="/AddSubject" component={AddSubject} />
      <Route exact path="/Professor" component={Professor} />
      <Route exact path="/Subject" component={Subject} />
      <Route exact path="/" component={Landing} />
      {/* <Route exact path="/Profile" component={Profile} />  */}
      <Route exact path="/Changes" component={Admin} />
      <PrivateRoute exact path='/Profile' component={Profile} />
      {/* <PrivateRoute exact path='/Results' component={ResultPage} /> */}
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRouters;
