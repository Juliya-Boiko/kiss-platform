import { Formik, Form } from "formik";
import { profileSchema } from "schemas/profileSchema";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { AuthInput } from "./common/AuthInput";

const initialValues = {
  email: '',
  name: '',
};

export const ProfileForm = () => {

  const submitHandler = (values) => {
    console.log(values);
    // const { email, name, password } = values;
    // const userData = { email, name, password };
    // dispatch(signupUser(userData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty  }) => (
        <Form>
          <AuthInput id="name" input="name" type="text" value={values.name} onChange={handleChange} error={errors.name} />
          <AuthInput id="email" input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Update profile" width="100%" />
        </Form>
      )}
    </Formik>
  );
};
