import styled from "styled-components";
import { profileSchema } from "schemas/profileSchema";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { AuthInput } from "./common/AuthInput";

const CustomForm = styled(Form)`
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
      {({ values, handleChange, errors, isValid, dirty  }) => (
        <CustomForm>
          <AuthInput id="name" input="name" type="text" value={values.name} onChange={handleChange} error={errors.name} />
          <AuthInput id="email" input="email" type="email" value={values.email} onChange={handleChange} error={errors.email} />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} title="Update profile" width="100%" />
        </CustomForm>
      )}
    </Formik>
  );
};
