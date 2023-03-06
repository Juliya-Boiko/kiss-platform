import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  display: block;
  width: ${p => p.width};
  padding: ${p => p.theme.spaces.xxs} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.2;
  text-align: center;
  border: none;
  outline: none;
  border-radius: ${p => p.theme.borderRadius.s};
  color: ${p => p.theme.colors.brand.white};
  background-color: ${p => p.theme.colors.brand.green};
  cursor: pointer;
  &:disabled {
    color: ${p => p.theme.colors.grayScale.gray40};
    background-color: ${p => p.theme.colors.grayScale.gray10};
  }
`;

export const ButtonPrimary = ({ type, disabled, title, width, onClick }) => {
  return (
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      disabled={disabled}
      width={width}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}