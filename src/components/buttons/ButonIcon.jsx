import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
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
    <Button
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={onClick}
      color={color}
    >
      {children}
    </Button>
  );
};
