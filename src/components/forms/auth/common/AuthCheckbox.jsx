import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 0 0 ${p=> p.theme.spaces.xs} 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};;
  text-align: center;
  color: ${p => p.theme.colors.grayScale.gray30};
`;

const Input = styled.input`
  appearance: none;
  position: absolute;
  &:checked + span {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>');
    background-size: contain;
    background-color: ${p => p.theme.colors.brand.green};
    border: 2px solid ${p => p.theme.colors.brand.green};
  }
`;

const Icon = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  margin: 0 ${p => p.theme.spaces.xxs} 0 0;
  border: 1px solid ${p => p.theme.colors.grayScale.gray30};
  border-radius: 2px;
`;

export const AuthCheckbox = ({ name, onChange, setShowModal }) => { 
  return (
    <Label>
      <Input type="checkbox" name={name} onChange={onChange} />
      <Icon />
      <p>I agree to the <span style={{ color: "green" }} onClick={setShowModal}>terms, conditions and Privacy Policy </span></p>
    </Label>
  );
};