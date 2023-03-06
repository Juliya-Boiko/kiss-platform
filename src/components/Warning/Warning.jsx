import styled from "styled-components";
import { motion } from "framer-motion";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";
import { TbAlertTriangle } from "react-icons/tb";

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  z-index: 5;
  backdrop-filter: blur(5px);
`;

const Container = styled(motion.div)`
  padding: ${p => p.theme.spaces.s};
  background-color: ${p => p.theme.colors.brand.white};
  box-shadow: ${p=> p.theme.boxShadow.l};
  border-radius: 3.16364px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grayScale.gray50};
`;

const Actions = styled(motion.div)`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled(TbAlertTriangle)`
  margin: 0 0 ${p => p.theme.spaces.xs} 0;
  color: ${p => p.theme.colors.support.warning};
`;

export const Warning = ({ onCancel, onConfirm, children }) => {
  return (
    <Backdrop>
      <Container
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.5, 0.71, 1, 1],
        }}
      >
        <Icon size={50} />
        {children}
        <Actions
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.5, 0.71, 1, 1],
          }}
        >
          <ButtonSecondary type='button' disabled={false} title='Cancel' width='100px' onClick={onCancel} />
          <ButtonPrimary type='button' disabled={false} title='Delete' width='100px' onClick={onConfirm} />
        </Actions>
      </Container>
    </Backdrop>
  );
};