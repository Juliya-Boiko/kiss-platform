import styled from "styled-components";
import { useState } from "react";
import { Field } from "formik";
import { TaskError } from "./TaskError";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${p=> p.theme.spaces.xs} 0;
`;

const Title = styled.span`
  margin: 0 0 ${p => p.theme.spaces.xxs} 0;
  font-weight: ${p=> p.theme.fontWeight.bold};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.8;
  color: ${p => p.theme.colors.grayScale.gray20};
`;

const Input = styled(Field)`
  width: 100%;
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

export const TaskInput = ({ input, value, onChange, error }) => {
  const [showError, setShowError] = useState(null);

  return (
    <Label htmlFor={input}>
      <Title>Task title:</Title>
      <Input
        type="text"
        name={input}
        id={input}
        value={value}
        onChange={onChange}
        onFocus={(e) => setShowError(e.target.name)}
        error={error}
      />
      {error && showError === input && <TaskError error={error} />}
    </Label>
  );
};