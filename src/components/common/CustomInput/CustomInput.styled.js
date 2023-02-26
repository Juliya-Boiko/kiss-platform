import styled from "styled-components";

export const InputWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin: 0 0 ${p=> p.theme.spaces.xs} 0;
  color: ${p => p.color};
`;

export const InputLabel = styled.label`
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

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  margin: 0 0 3px 0;
  padding: ${p=> p.theme.spaces.xxs};
  outline: 1px solid ${p => p.color};
  border-radius: ${p => p.theme.borderRadius.s};

  &::placeholder {
    opacity: 0;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    padding: 0 3px;
    font-size: 10px;
  }
`;