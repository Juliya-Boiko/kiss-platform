import * as Yup from 'yup';

export const sighupSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Name is required'),
  email: Yup.string().email('invalid email address format').required('Email is required'),
  password: Yup.string().min(8).matches(/^\S+$/, 'must not contain spaces').required('Password is required'),
  acceptedTerms: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions."),
  confirm: Yup.string().oneOf([Yup.ref('password')], 'Dont match with password').required('Confirm password is required'),
})