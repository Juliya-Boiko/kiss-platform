// import { useDispatch } from "react-redux";
// import { loginUser } from "redux/auth/authOperations";
import { Formik } from "formik";
import { CustomInput } from "components/common/CustomInput/CustomInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { loginSchema } from "schemas/loginSchema";
import { CustomForm } from "./common/CustomForm.styled";

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  //const dispatch = useDispatch();

  const loginHandler = (values) => {
   // e.preventDefault();
    console.log('login values--->', values);
    //dispatch(loginUser());
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={loginHandler}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <CustomForm>
          <CustomInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <CustomInput input="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Login" width="100%" />
        </CustomForm>
      )}
    </Formik>
  );
}