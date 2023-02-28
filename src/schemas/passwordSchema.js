import * as Yup from 'yup';

export const passwordSchema = Yup.object().shape({
  password: Yup.string().min(8).matches(/^\S+$/, 'must not contain spaces').required('Password is required'),
  confirm: Yup.string().oneOf([Yup.ref('password')], 'Dont match with password').required('Confirm password is required'),
})