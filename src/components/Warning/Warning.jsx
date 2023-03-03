import styled from "styled-components";
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

const Container = styled.div`
  padding: ${p => p.theme.spaces.s};
  background-color: ${p => p.theme.colors.brand.white};
  box-shadow: ${p=> p.theme.boxShadow.l};
  border-radius: 3.16364px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grayScale.gray50};
`;

const Actions = styled.div`
margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled(TbAlertTriangle)`
  margin: 0 0 ${p => p.theme.spaces.xs} 0;
  color: ${p => p.theme.colors.support.warning};
`;

export const Warning = ({ onCancel, onConfirm }) => {
  return (
    <Backdrop>
      <Container>
        <Icon size={50} />
        <p>You sure you want delete this task?</p>
        <Actions>
          <ButtonSecondary type='button' disabled={false} title='Cancel' width='100px' onClick={onCancel} />
          <ButtonPrimary type='button' disabled={false} title='Delete' width='100px' onClick={onConfirm} />
        </Actions>
      </Container>
    </Backdrop>
  );
};