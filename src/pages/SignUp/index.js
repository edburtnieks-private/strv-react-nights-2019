import React from 'react';
import { Form } from '../../components/Shared/Form';
import { Input } from '../../components/Shared/Input';
import { schema } from './schema';

const SignUp = () => {
  const defaultValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Sign Up</h1>

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
