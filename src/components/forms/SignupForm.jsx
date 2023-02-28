import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "redux/auth/authOperations";
import { sighupSchema } from "schemas/signupSchema";
import { Formik } from "formik";
import { CustomForm } from "./common/CustomForm.styled";
import { CustomInput } from "components/common/CustomInput/CustomInput";
import { CustomCheckbox } from "components/common/CustomCheckbox/CustomCheckbox";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Modal } from "components/common/Modal/Modal";
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
        <CustomForm>
          <CustomInput input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <CustomInput input="name" type="text" value={values.name} onChange={handleChange} error={errors.name} />
          <CustomInput input="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
          <CustomInput input="confirm" type="password" value={values.confirm} onChange={handleChange} error={errors.confirm} />
          <CustomCheckbox value={values.acceptedTerms} name="acceptedTerms" onChange={handleChange} setShowModal={() => setShowModal(true)} />
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
        </CustomForm>
      )}
    </Formik>
  );
}