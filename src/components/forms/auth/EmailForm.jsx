import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emailSchema } from "schemas/emailSchema";
import { forgotPassword } from "redux/auth/authOperations";
import { Formik } from "formik";
import { AuthForm } from "./common/AuthForm.styled";
import { AuthInput } from "components/forms/auth/common/AuthInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";

const initialValues = {
  email: '',
};

export const EmailForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    dispatch(forgotPassword(values));
    navigate(`/insert-code/${values.email}`);
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={emailSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <AuthForm>
          <AuthInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Send Code" width="100%" />
        </AuthForm>
      )}
    </Formik>
  );
}