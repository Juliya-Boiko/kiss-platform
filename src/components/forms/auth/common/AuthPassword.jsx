import styled from "styled-components";
import { useState } from "react";
import { inputOutlineColor } from "helpers/inputOutlineColor";
import { nameCapitalize } from "helpers/nameCapitalize";
import { AuthError } from "./AuthError";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

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

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
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

export const AuthPassword = ({ input, value, onChange, error }) => {
  const [showError, setShowError] = useState(null);
  const [type, setType] = useState(true);

  return (
    <Wrapper color={inputOutlineColor(showError, error, input)}> 
      <Input
        id={input}
        name={input}
        type={type ? 'password' : 'text'}
        value={value}
        placeholder="placeholder"
        onFocus={(e)=> setShowError(e.target.name)}
        color={inputOutlineColor(showError, error, input)}
        onChange={onChange}
      />
      <Label htmlFor={input}>{nameCapitalize(input)}</Label>
      {error && showError === input && <AuthError error={error} />}
      <Button type="button" onClick={() => setType(prevState => !prevState)}>
        {type ? <RxEyeClosed size={25} /> : <RxEyeOpen size={25} /> }
      </Button>
    </Wrapper>
  );
};