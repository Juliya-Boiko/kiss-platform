import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { taskSchema } from "schemas/taskSchema";
import { Formik, Form } from "formik";
import { TaskInput } from "./common/TaskInput";
import { TaskSelect } from "./common/TaskSelect";
import { TaskArea } from "./common/TaskArea";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { updateTaskAsync } from "api/tasks";

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 900px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UpdateForm = ({ values, token }) => {
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    const { title, descr, _id, status } = values;
    const data = { token, title, descr, status, id:_id };
    const result = await updateTaskAsync(data);
    if (result.status === 200) {
      navigate("/homepage/statistic");
    }
  };

  return (
    <>
    { values && <Formik
        initialValues={values}
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
      </Formik> }
    </>
);
};