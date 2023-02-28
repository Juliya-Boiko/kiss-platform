import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.brand.green};
  cursor: pointer;
  span {
    margin-left: 23px;
  }
`;

export const ButtonNav = ({ children, onClick, title }) => {
  return (
    <Button type="button" onClick={onClick}>{children} <span>{title}</span></Button>
  );
};