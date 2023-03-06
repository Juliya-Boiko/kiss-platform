import styled from "styled-components";
import { motion } from "framer-motion";
import { filter } from "redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { BiSearch } from "react-icons/bi";

const CustomForm = styled(Form)`
  position: relative;
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 450px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: ${p => p.theme.spaces.xxs} ${p => p.theme.spaces.xs};
  font-weight: ${p=> p.theme.fontWeight.regular};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.2;
  border: none;
  border-radius: ${p => p.theme.borderRadius.l};
  outline: 1px solid ${p => p.theme.colors.grayScale.gray40}; 
  color: ${p => p.theme.colors.grayScale.gray40};
  background-color: ${p => p.theme.colors.grayScale.gray5};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: ${p=> p.theme.fontSize.s};
  }
`;

const SearchBtn = styled(motion.button)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.grayScale.gray40};
  cursor: pointer;
`;

const initialValues = {
  value: ''
}

export const FilterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = ({ value }) => {
    dispatch(filter(value));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
    >
      {({ values, handleChange }) => (
        <CustomForm>
          <Input type="text" id="value" name="value" value={values.value} onChange={handleChange} /> 
          <SearchBtn
            whileHover={{ color: '#858FA6' }}
            whileTap={{ color: '#559B95' }}
            type="submit"
          >
            <BiSearch size="26" />
          </SearchBtn>
        </CustomForm>
      )}
    </Formik>
  );
};