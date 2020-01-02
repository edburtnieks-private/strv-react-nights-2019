import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';

const isAuthenticated = false;

const propTypes = {
  component: PropTypes.func.isRequired,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (isAuthenticated) {
          return <Component {...routeProps} />;
        }

        return (
          <Redirect
            to={{
              pathname: routes.SIGN_UP,
              state: {
                from: routeProps.location.pathname,
              },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = propTypes;

export { PrivateRoute };
