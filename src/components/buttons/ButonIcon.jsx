import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.color};
  cursor: pointer;
`;

export const ButtonIcon = ({ children, onClick, color }) => {
  return (
    <Button type="button" onClick={onClick} color={color} >{children}</Button>
  );
};
