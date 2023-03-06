import { TfiClose } from "react-icons/tfi";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Backdrop } from "components/common/Backdrop.styled";

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
  const { theme: customTheme } = useSelector(state => state.theme);

  return (
    <Backdrop bgColor={customTheme}>
      <CloseButton type="button" onClick={onClick}>
        <TfiClose size="16" />
      </CloseButton>
      {children}
    </Backdrop>
  );
}