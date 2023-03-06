import styled from "styled-components";
import { profileSchema } from "schemas/profileSchema";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { AuthInput } from "./common/AuthInput";
import { MotionWrapper } from "components/auth/common/MotionWrapper.styled";

const CustomForm = styled(Form)`
  width: 100%;
  margin-bottom: ${p => p.theme.spaces.m};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 400px;
  }
`;

const initialValues = {
  email: '',
  name: '',
};

export const ProfileForm = () => {
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const data = {
      token,
      ...values
    };
    dispatch(updateUser(data));
    navigate("/homepage/statistic");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
       
        <CustomForm>
           <MotionWrapper
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.5, 0.71, 1, 1],
            }}
          >
              <AuthInput id="name" input="name" type="text" value={values.name} onChange={handleChange} error={errors.name} />
              <AuthInput id="email" input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
              <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Update profile" width="100%" />
          </MotionWrapper>
        </CustomForm>
      )}
    </Formik>
  );
};
