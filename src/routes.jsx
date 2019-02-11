//Depencencies
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Components
import App from "./components/App";
import Landing from "./components/landing/Lading";
import Profile from "./components/profile/Profile";
import Page404 from "./components/Page404";
import SignInForm from "./components/authentication/SignInForm";
import SignUpForm from "./components/authentication/SignUpForm";
import ChangePassword from "./components/authentication/ChangePassword";
import Authentication from "./components/authentication/authentication";
import Contact from "./components/contact/contact";
import Admin from "./components/admin/Changes";
import Blog from "./components/blog/blog";
import ResultPage from "./components/search/ResultPage";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

// Muchachos lo dejo comentado para que no genere errores al ejecutar
// const PrivateRoute = ({ component: Component, ...rest}) => (
//   <Route {...rest} render ={(props)=>(
//     fakeAuth.isAuthenticated === true Este es el condicional que toca modificar cuando se implemente la sesion omitan esto si no lo entienden
//       ? <Component {...props}/>
//       : <Redirect to ='/LogIn'/>
//   )}/>
// )

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/Authentication" component={Authentication} />
      <Route exact path="/LogIn" component={SignInForm} />
      <Route exact path="/SignIn" component={SignUpForm} />
      <Route exact path="/ChangePassword" component={ChangePassword} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Results" component={ResultPage} />
      <Route exact path="/" component={Landing} />
      {/* <Route exact path="/Profile" component={Profile} /> */}
      <Route exact path="/Changes" component={Admin} />
      <PrivateRoute exact path='/Profile' component={Profile} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRouters;
