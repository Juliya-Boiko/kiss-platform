import { useState } from "react";
import { inputOutlineColor } from "helpers/inputOutlineColor";
import { InputWrapper, InputLabel, InputStyled } from "./CustomInput.styled";
import { nameCapitalize } from "helpers/nameCapitalize";
import { ErrorMessage } from "./ErrorMessage";

export const CustomInput = ({ input, type, value, onChange, error }) => {
  const [showError, setShowError] = useState(null);

  return (
    <InputWrapper color={inputOutlineColor(showError, error, input)}> 
      <InputStyled
        id={input}
        name={input}
        type={type}
        value={value}
        placeholder="placeholder"
        onFocus={(e)=> setShowError(e.target.name)}
        color={inputOutlineColor(showError, error, input)}
        onChange={onChange}
      />
      <InputLabel htmlFor={input}>{nameCapitalize(input)}</InputLabel>
    {error && showError === input && <ErrorMessage error={error} />}
    </InputWrapper>
  );
};