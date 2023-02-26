import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";

const ErrorContainer = styled.div`
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
  color: red;
`;



export const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorIcon size="15"/>
      <p>{error}</p>
    </ErrorContainer>
  );
}