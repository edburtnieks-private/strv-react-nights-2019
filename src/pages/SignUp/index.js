import React, { useState } from 'react';
import * as routes from '../../routes';
import { Form } from '../../components/Shared/Form';
import { Input } from '../../components/Shared/Input';
import { schema } from './schema';
import { createCustomer } from '../../api/customers/create-customer';

// eslint-disable-next-line react/prop-types
const SignUp = ({ history, location }) => {
  const [globalError, setGlobalError] = useState('');

  const defaultValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const onSubmit = async (data) => {
    try {
      const { email, password, firstName } = data;
      await createCustomer({ email, password, firstName });
      /* eslint-disable react/prop-types */
      console.log(location);
      const { from } = location.state;
      history.push(from || routes.ACCOUNT);
      /* eslint-enable react/prop-types */
    } catch (error) {
      setGlobalError(error.message);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>

      {globalError && globalError}

      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        validationSchema={schema}
      >
        <Input
          name="firstName"
          id="first-name"
          label="First name"
          type="text"
        />
        <Input name="email" id="email" label="Email" type="email" />
        <Input name="password" id="password" label="Password" type="password" />
        <Input
          name="passwordConfirmation"
          id="password-confirmation"
          label="Password confirmation"
          type="password"
        />
        <input type="submit" value="Sign Up" />
      </Form>
    </>
  );
};

export { SignUp };
