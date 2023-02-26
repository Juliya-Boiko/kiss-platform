import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: ${p => p.width};
  padding: ${p => p.theme.spaces.xxs} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.2;
  text-align: center;
  border: none;
  outline: 1px solid ${p => p.theme.colors.brand.green};
  border-radius: ${p => p.theme.borderRadius.s};
  color: ${p => p.theme.colors.brand.green};
  background-color: ${p => p.theme.colors.brand.white};

  &:disabled {
    color: ${p => p.theme.colors.grayScale.gray40};
    background-color: ${p => p.theme.colors.grayScale.gray10};
  }
`;

export const ButtonSecondary = ({ type, disabled, title, width, onClick }) => {
  return (
    <Button type={type} disabled={disabled} width={width} onClick={onClick}>{title}</Button>
  );
}