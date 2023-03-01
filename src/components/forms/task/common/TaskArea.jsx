import styled from "styled-components";
import { useState } from "react";
import { Field } from "formik";
import { TaskError } from "./TaskError";

const Container = styled.div`
  margin: 0 0 ${p => p.theme.spaces.s} 0;
`;

const Input = styled(Field)`
  width: 100%;
  height: 200px;
  resize: none;
  margin: 0 0 ${p => p.theme.spaces.xxs} 0;
  padding: ${p => p.theme.spaces.xxs};
  font-weight: ${p=> p.theme.fontWeight.regular};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.8;
  color: ${p => p.theme.colors.grayScale.gray50};
  border: none;
  border-radius: ${p => p.theme.borderRadius.s};
  outline: 1px solid ${p => p.theme.colors.grayScale.gray20};
`;

export const TaskArea = ({ name, value, onChange, error }) => {
  const [showError, setShowError] = useState(null);

  return (
    <Container>
      <Input
        as="textarea"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={(e) => setShowError(e.target.name)}
        error={error}
      />
      {error && showError === name && <TaskError error={error} />}
    </Container>
  );
};