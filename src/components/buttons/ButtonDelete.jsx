import styled from "styled-components";

const Button = styled.button`
  padding: ${p => p.theme.spaces.xxs};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.xs};
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.support.error};
  cursor: pointer;
`;


export const ButtonDelete = ({ title, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>{title}</Button>
  );
}