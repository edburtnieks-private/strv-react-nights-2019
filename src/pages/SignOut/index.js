import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/customer/actions';
import * as routes from '../../routes';

// eslint-disable-next-line react/prop-types
const SignOut = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const logout = async () => {
      await dispatch(signOut());
      // eslint-disable-next-line react/prop-types
      history.push(routes.HOME);
    };

    logout();
  });

  return <span>Signing out</span>;
};

export { SignOut };
