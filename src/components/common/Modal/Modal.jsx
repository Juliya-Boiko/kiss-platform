import { TfiClose } from "react-icons/tfi";
import { Backdrop, CloseButton } from "./Modal.styled";

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