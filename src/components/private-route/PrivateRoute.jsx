import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loadState } from "../../redux/store/localStorage";

const auth_token = loadState();

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth_token !== {}
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)