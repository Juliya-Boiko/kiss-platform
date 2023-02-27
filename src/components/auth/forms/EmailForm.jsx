import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { emailSchema } from "schemas/emailSchema";
import { CustomInput } from "components/common/CustomInput/CustomInput";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
//import { forgotPasswordAsync } from "api/auth";

const initialValues = {
  email: '',
};

export const EmailForm = () => {
   const navigate = useNavigate();

  const sendEmailHandler = async (values) => {
    console.log('Sending email values--->', values);
    // await forgotPasswordAsync();
    navigate('/insert-code');
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={emailSchema}
      onSubmit={sendEmailHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <Form>
          <CustomInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Send Code" width="100%" />
        </Form>
      )}
    </Formik>
  );
}