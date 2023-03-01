import styled from "styled-components";
import { status } from "constants/status";
import { Field } from "formik";
import { TaskError } from "./TaskError";

const Container = styled.div`
  margin: 0 0 ${p=> p.theme.spaces.xs} 0;
`;

const Select = styled(Field)`
  width: 100%;
  margin: 0 0 ${p => p.theme.spaces.xxs} 0;
  padding: ${p => p.theme.spaces.xxs};
  border: none;
  border-radius: ${p => p.theme.borderRadius.s};
  outline: 1px solid ${p => p.theme.colors.grayScale.gray20};
  font-weight: ${p=> p.theme.fontWeight.regular};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.8;
  color: ${p => p.theme.colors.grayScale.gray50};
`;

export const TaskSelect = ({ error, onChange }) => {
  return (
    <Container>
      <Select name="status" as="select" onChange={onChange} >
        <option disabled value="">Status</option>
        <option value={status.IN_PROGRESS}>{status.IN_PROGRESS}</option>
        <option value={status.DONE}>{status.DONE}</option>
        <option value={status.PAUSED}>{status.PAUSED}</option>
        <option value={status.URGENTLY}>{status.URGENTLY}</option>
      </Select>
      {error && <TaskError error={error} />}
    </Container>
  );
};