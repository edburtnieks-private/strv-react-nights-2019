import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as routes from '../../routes';

const propTypes = {
  component: PropTypes.elementType.isRequired,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const customer = useSelector((state) => !!state.customer);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (customer) {
          return <Component {...routeProps} />;
        }

        return (
          <Redirect
            to={{
              pathname: routes.SIGN_IN,
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
