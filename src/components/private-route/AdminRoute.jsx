import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loadID } from "../../redux/store/localStorage";

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loadID() === 1
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)