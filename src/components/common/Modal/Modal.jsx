import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  padding: ${p => p.theme.spaces.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.brand.white};
  //overflow-y: scroll;
  //transition: opacity 300ms ease-in-out;
`;

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
      <div>
        {children}
      </div>
    </Backdrop>
  );
}