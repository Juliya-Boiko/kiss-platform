import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Name is required'),
  email: Yup.string().email('invalid email address format').required('Email is required'),
})