import styled from "styled-components";
import { AuthContent } from "../AuthPage/AuthPage.styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  //background-color: lightgreen;
`;

export const AuthUser = ({ children }) => {
  return (
    <Container>
      <AuthContent>
        {children}
      </AuthContent>
    </Container>
  );
}