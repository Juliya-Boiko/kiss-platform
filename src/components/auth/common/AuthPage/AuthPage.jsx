import noteImg from '../../../../images/auth-retangle.png';
import { AuthContainer, AuthMain, AuthAddictional, AuthImg, AuthTitle, AuthText } from "./AuthPage.styled";

export const AuthPage = ({ children }) => {
  return (
    <AuthContainer>
      <AuthMain>
        {children}
      </AuthMain>
      
      <AuthAddictional>
        <AuthImg src={noteImg} alt="Laptop" />  
        <AuthTitle>Revolutionizing the patent market</AuthTitle>
        <AuthText>Lorem ipsum dolor sit amet consectetur adipisicing elit. </AuthText>
        <AuthText>Maxime mollitia</AuthText>
      </AuthAddictional>
    </AuthContainer>
  );
}


