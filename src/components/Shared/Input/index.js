import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'react-hook-form';

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// eslint-disable-next-line react/prop-types
const Input = ({ name, id, register, label, errors, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} ref={register} {...rest} />
      <ErrorMessage errors={errors} name={name} as="div" />
    </>
  );
};

Input.propTypes = propTypes;

export { Input };
