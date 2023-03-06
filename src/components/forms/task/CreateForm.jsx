import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { taskSchema } from "schemas/taskSchema";
import { addTask } from "redux/tasks/tasksOperations";
import { Formik, Form } from "formik";
import { TaskInput } from "./common/TaskInput";
import { TaskSelect } from "./common/TaskSelect";
import { TaskArea } from "./common/TaskArea";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
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
`;

const initialValues = {
  title: '',
  descr: '',
  status: '',
};

export const CreateForm = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const submitHandler = async (values) => {
    const data = {
      token,
      ...values
    }
    dispatch(addTask(data));
    navigate("/homepage/statistic");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, errors, isValid, dirty }) => (
        <MotionWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.5, 0.71, 1, 1],
          }}
        >
          <CustomForm>
            <TaskSelect error={errors.status} onChange={handleChange} />
            <TaskInput input="title" value={values.title} onChange={handleChange} error={errors.title} />
            <TaskArea name="descr" value={values.descr} onChange={handleChange} error={errors.descr}  />
            <Actions
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.5, 0.71, 1, 1],
              }}
            >
              <ButtonSecondary type='button' disabled={false} title='Cancel' width='130px' onClick={() => navigate("/homepage/statistic")} />
              <ButtonPrimary type='submit' disabled={!isValid || !dirty} title='Save' width='130px' />
            </Actions>
          </CustomForm>
        </MotionWrapper>
      )}
    </Formik>
  );
}