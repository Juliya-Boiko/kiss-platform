import { useDispatch, useSelector } from "react-redux";
import { passwordSchema } from "schemas/passwordSchema";
import { changePassword } from "redux/auth/authOperations";
import { Formik } from "formik";
import { AuthForm } from "./common/AuthForm.styled";
import { AuthInput } from "components/forms/auth/common/AuthInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";

const initialValues = {
  password: '',
  confirm: '',
}; 

export const PasswordForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  const submitHandler = (values) => {
    const { password } = values;
    const data = { id: userId, password }
    dispatch(changePassword(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={passwordSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <AuthForm>
          <AuthInput input="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
          <AuthInput input="confirm" type="password" value={values.confirm} onChange={handleChange} error={errors.confirm} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Confirm" width="100%" />
        </AuthForm>
      )}
    </Formik>
  );
};