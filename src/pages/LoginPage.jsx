import styled from 'styled-components';
import { LoginForm } from 'components/forms/LoginForm';
import { AuthWrapper } from 'components/auth/AuthWrapper';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  margin: ${p => p.theme.spaces.xs} 0 0 auto;
  text-align: end;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.brand.green};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: ${p => p.theme.fontSize.s};
  }
`;

const LoginPage = () => {
  return (
    <AuthWrapper navTitle="Don't you have an account?" navLink="/signup" navTo="Create an account" >
      <LoginForm />
      <Link to="/forgot-password">Forgot password</Link>
    </AuthWrapper>
  );
};

export default LoginPage;