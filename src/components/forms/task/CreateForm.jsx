import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { taskSchema } from "schemas/taskSchema";
import { Formik, Form } from "formik";
import { TaskInput } from "./common/TaskInput";
import { TaskSelect } from "./common/TaskSelect";
import { TaskArea } from "./common/TaskArea";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const initialValues = {
  title: '',
  descr: '',
  status: '',
};

export const CreateForm = () => {
  const navigate = useNavigate();

  const submitHandler = (values) => {
    console.log(values);
    navigate("/homepage/statistic");
    // const { email, name, password } = values;
    // const userData = { email, name, password };
    //dispatch(signupUser(userData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <CustomForm>
          <TaskSelect error={errors.status} onChange={handleChange} />
          <TaskInput input="title" value={values.title} onChange={handleChange} error={errors.title} />
          <TaskArea name="descr" value={values.descr} onChange={handleChange} error={errors.descr}  />
          <Actions>
            <ButtonSecondary type='button' disabled={false} title='Cancel' width='130px' onClick={() => navigate("/homepage/statistic")} />
            <ButtonPrimary type='submit' disabled={!isValid || !dirty} title='Save' width='130px' />
          </Actions>
        </CustomForm>
      )}
    </Formik>
  );
}