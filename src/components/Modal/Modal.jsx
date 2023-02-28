import { TfiClose } from "react-icons/tfi";
import { Backdrop } from "components/common/Backdrop.styled";
import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: ${p => p.theme.spaces.xs};
  right: ${p => p.theme.spaces.xs};
  padding: 0;
  border: 0;
  background-color: transparent;
  color: ${p => p.theme.colors.grayScale.gray50};
`;

export const Modal = ({ children, onClick }) => {
  return (
    <Backdrop>
      <CloseButton type="button" onClick={onClick}>
        <TfiClose size="16" />
      </CloseButton>
      {children}
    </Backdrop>
  );
}