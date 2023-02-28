import { Formik } from "formik";
import { CustomForm } from "./common/CustomForm.styled";
import { passwordSchema } from "schemas/passwordSchema";
import { CustomInput } from "components/common/CustomInput/CustomInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";

const initialValues = {
  password: '',
  confirm: '',
}; 

export const PasswordForm = () => {

  const submitHandler = (values) => {
    console.log(values);
   // dispatch(signupUser());
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