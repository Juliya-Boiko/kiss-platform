import { useDispatch, useSelector } from "react-redux";
import { passwordSchema } from "schemas/passwordSchema";
import { changePassword } from "redux/auth/authOperations";
import { Formik } from "formik";
import { CustomForm } from "./common/CustomForm.styled";
import { CustomInput } from "components/common/CustomInput/CustomInput";
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
        <CustomForm>
          <CustomInput input="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
          <CustomInput input="confirm" type="password" value={values.confirm} onChange={handleChange} error={errors.confirm} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Confirm" width="100%" />
        </CustomForm>
      )}
    </Formik>
  );
};