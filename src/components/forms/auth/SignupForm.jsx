import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "redux/auth/authOperations";
import { sighupSchema } from "schemas/signupSchema";
import { Formik } from "formik";
import { AuthForm } from "./common/AuthForm.styled";
import { AuthInput } from "components/forms/auth/common/AuthInput";
import { AuthCheckbox } from "components/forms/auth/common/AuthCheckbox";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Modal } from "components/Modal/Modal";
import { TermsAgreement } from "components/auth/TermsAgreement";

const initialValues = {
  email: '',
  name: '',
  password: '',
  confirm: '',
  acceptedTerms: false,
};

export const SignupForm = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const { email, name, password } = values;
    const userData = { email, name, password };
    dispatch(signupUser(userData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={sighupSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <AuthForm>
          <AuthInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <AuthInput input="name" type="text" value={values.name} onChange={handleChange} error={errors.name} />
          <AuthInput input="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
          <AuthInput input="confirm" type="password" value={values.confirm} onChange={handleChange} error={errors.confirm} />
          <AuthCheckbox value={values.acceptedTerms} name="acceptedTerms" onChange={handleChange} setShowModal={() => setShowModal(true)} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Create an account" width="100%" />
        
          {showModal &&
            <Modal onClick={() => setShowModal(false)}>
              <TermsAgreement
                onAgree={() => {
                  values.acceptedTerms = true;
                  setShowModal(false);
                }}
                onDecline={() => setShowModal(false)}
              />
            </Modal>
          }
        </AuthForm>
      )}
    </Formik>
  );
}