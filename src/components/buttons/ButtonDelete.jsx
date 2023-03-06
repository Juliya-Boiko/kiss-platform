import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
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
    <Button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1],
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}