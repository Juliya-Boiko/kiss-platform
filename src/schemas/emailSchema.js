import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
  email: Yup.string().email('invalid email address format').required('Email is required'),
})