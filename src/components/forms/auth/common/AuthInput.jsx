import styled from "styled-components";
import { useState } from "react";
import { inputOutlineColor } from "helpers/inputOutlineColor";
import { nameCapitalize } from "helpers/nameCapitalize";
import { AuthError } from "./AuthError";

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin: 0 0 ${p=> p.theme.spaces.xs} 0;
  color: ${p => p.color};
`;

const Label = styled.label`
  position: absolute;
  left: ${p=> p.theme.fontSize.xs};
  top: 50%;
  transform: translateY(-50%);

  font-weight: ${p=> p.theme.fontWeight.medium};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.5;
  color: inherit;
  background-color:  ${p=> p.theme.colors.brand.white};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0 0 3px 0;
  padding: ${p=> p.theme.spaces.xxs};
  outline: 1px solid ${p => p.color};
  border-radius: ${p => p.theme.borderRadius.s};
  &::placeholder {
    opacity: 0;
  }
  &:focus + label, &:not(:placeholder-shown) + label {
    top: 0;
    padding: 0 3px;
    font-size: 10px;
  }
`;

export const AuthInput = ({ input, type, value, onChange, error }) => {
  const [showError, setShowError] = useState(null);

  return (
    <Wrapper color={inputOutlineColor(showError, error, input)}> 
      <Input
        id={input}
        name={input}
        type={type}
        value={value}
        placeholder="placeholder"
        onFocus={(e)=> setShowError(e.target.name)}
        color={inputOutlineColor(showError, error, input)}
        onChange={onChange}
      />
      <Label htmlFor={input}>{nameCapitalize(input)}</Label>
    {error && showError === input && <AuthError error={error} />}
    </Wrapper>
  );
};