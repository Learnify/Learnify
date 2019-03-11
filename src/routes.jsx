//Depencencies
import React from "react";
import { Route, Switch } from "react-router-dom";

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
import PasswordReset from "./components/authentication/PasswordReset";
import Invalid from "./components/authentication/Invalid";
import ChangePassword from "./components/authentication/ChangePassword";
import Authentication from "./components/authentication/authentication";
import Contact from "./components/contact/contact";
import Admin from "./components/admin/Changes";
import Blog from "./components/blog/blog";
import Chat from "./components/chat/chat";
import ResultPage from "./components/search/ResultPage";
import AddSubject from "./components/add/add-subject";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { PublicRoute } from "./components/private-route/PublicRoute";
import { AdminRoute } from "./components/private-route/AdminRoute";

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/Authentication" component={Authentication} />
      <Route exact path="/LogIn" component={SignInForm} />
      <Route exact path="/SignIn" component={SignUpForm} />
      <Route exact path="/SignUpProf" component={SignUpProf} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/AddSubject" component={AddSubject} />
      <Route exact path="/" component={Landing} />
      <PrivateRoute exact path="/chat" component={Chat} />
      <PrivateRoute exact path="/Profile" component={Profile} />
      <PrivateRoute exact path="/Results" component={ResultPage} />
      <PrivateRoute path="/Professor/:id" component={Professor} />
      <PrivateRoute path="/Subject/:id" component={Subject} />
      <PublicRoute exact path="/Invalid" component={Invalid} />
      <PublicRoute exact path="/Reset" component={PasswordReset} />
      <AdminRoute exact path="/Changes" component={Admin} />
      <Route path="/ChangePassword/:token" component={ChangePassword} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRouters;
