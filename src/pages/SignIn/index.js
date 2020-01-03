import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../../components/Shared/Form';
import { Input } from '../../components/Shared/Input';
import { schema } from './schema';
import { signIn } from '../../store/customer/actions';
import * as routes from '../../routes';

// eslint-disable-next-line react/prop-types
const SignIn = ({ history }) => {
  const [globalError, setGlobalError] = useState('');
  const dispatch = useDispatch();
  const defaultValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await dispatch(signIn(email, password));
      // eslint-disable-next-line react/prop-types
      history.push(routes.HOME);
    } catch (error) {
      setGlobalError(error.message);
    }
  };

  return (
    <>
      <h1>Sign In</h1>

      {globalError && globalError}

      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        validationSchema={schema}
      >
        <Input name="email" id="email" label="Email" type="email" />
        <Input name="password" id="password" label="Password" type="password" />
        <input type="submit" value="Sign In" />
      </Form>
    </>
  );
};

export { SignIn };
