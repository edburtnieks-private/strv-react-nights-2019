import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const defaultProps = {
  defaultValues: {},
  validationSchema: {},
};

const Form = ({ onSubmit, defaultValues, validationSchema, children }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues,
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export { Form };
