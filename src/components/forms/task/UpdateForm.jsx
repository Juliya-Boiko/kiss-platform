import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { taskSchema } from "schemas/taskSchema";
import { updateTaskAsync, deleteTaskAsync } from "api/tasks";
import { Formik, Form } from "formik";
import { TaskInput } from "./common/TaskInput";
import { TaskSelect } from "./common/TaskSelect";
import { TaskArea } from "./common/TaskArea";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { ButtonDelete } from "components/buttons/ButtonDelete";
import { Warning } from "components/Warning/Warning";
import { Notify } from 'notiflix';
import { MotionWrapper } from "components/common/MotionWrapper.styled";

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 900px;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-bottom: ${p => p.theme.spaces.m};
  }
`;

export const UpdateForm = ({ values, token }) => {
  const [showWarn, setShowWarn] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    const { title, descr, _id, status } = values;
    const data = { token, title, descr, status, id:_id };
    const result = await updateTaskAsync(data);
    if (result.status === 200) {
      navigate("/homepage/statistic");
    }
  };

  const deleteHandler = async () => {
    const {  _id } = values;
    const data = { token, _id };
    const response = await deleteTaskAsync(data);
    if (response.status === 200) {
      Notify.success('Task deleted successfull!');
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
            <MotionWrapper
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.5, 0.71, 1, 1],
              }}
            >
              <TaskSelect error={errors.status} onChange={handleChange} />
              <TaskInput input="title" value={values.title} onChange={handleChange} error={errors.title} />
              <TaskArea name="descr" value={values.descr} onChange={handleChange} error={errors.descr}  />
            </MotionWrapper>
            <Actions
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1],
                }}
              >
                <ButtonSecondary type='button' disabled={false} title='Cancel' width='130px' onClick={() => navigate("/homepage/statistic")} />
                <ButtonPrimary type='submit' disabled={!isValid || !dirty} title='Save' width='130px' />
            </Actions>
            <ButtonDelete title='Delete task' onClick={()=> setShowWarn(true)} />
          </CustomForm>
        )}
      </Formik>}
      {showWarn && <Warning onCancel={() => setShowWarn(false)} onConfirm={deleteHandler}>
        <p>You sure you want delete this task?</p>
      </Warning> }
    </>
  );
};