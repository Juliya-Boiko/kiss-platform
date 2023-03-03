import { useDispatch } from "react-redux";
import { loginSchema } from "schemas/loginSchema";
import { loginUser } from "redux/auth/authOperations";
import { Formik } from "formik";
import { AuthForm } from "./common/AuthForm.styled";
import { AuthInput } from "components/forms/auth/common/AuthInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { AuthPassword } from "./common/AuthPassword";

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <AuthForm>
          <AuthInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <AuthPassword input="password" value={values.password} onChange={handleChange} error={errors.email}  />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Login" width="100%" />
        </AuthForm>
      )}
    </Formik>
  );
}