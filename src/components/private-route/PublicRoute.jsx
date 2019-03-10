import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loadLoggedIn } from "../../redux/store/localStorage";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loadLoggedIn() === undefined
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/Profile', state: { from: props.location } }} />
  )} />
)