import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ErrorContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.2;
  color: ${p => p.theme.colors.grayScale.gray30};
`;

const ErrorIcon = styled(AiOutlineInfoCircle)`
  margin: 0 5px 0 0;
  color: ${p => p.theme.colors.support.error};
`;

export const AuthError = ({ error }) => {
  return (
    <ErrorContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0.5, 0.71, 1, 1],
      }}
    >
      <ErrorIcon size="15"/>
      <p>{error}</p>
    </ErrorContainer>
  );
}