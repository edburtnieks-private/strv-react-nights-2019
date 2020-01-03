import { object, string, ref } from 'yup';

const schema = object().shape({
  firstName: string(),
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must be less than 30 characters')
    .matches(/[0-9]/u, 'Password should contain at least one number')
    .matches(/[a-z]/u, 'Password should contain at least one lowercase letter')
    .required('Password is required'),
  passwordConfirmation: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Must confirm password'),
});

export { schema };
