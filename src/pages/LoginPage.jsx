//import { NavLink } from 'react-router-dom';
import { LoginForm } from 'components/auth/forms/LoginForm';
import { AuthPage } from 'components/auth/common/AuthPage/AuthPage';
import { AuthContent, AuthAddictionalLink } from 'components/auth/common/AuthPage/AuthPage.styled';
import { AuthHeader } from 'components/auth/common/AuthHeader/AuthHeader';
//import {  } from 'components/auth/common/AuthPage/AuthPage.styled';

const LoginPage = () => {
  return (
    <AuthPage>
      <AuthContent>
        <AuthHeader title="Don't you have an account?" link="/signup" navTo="Create an account" />
        <LoginForm />
        <AuthAddictionalLink to="/forgot-password">Forgot Password?</AuthAddictionalLink>
      </AuthContent>
    </AuthPage>
  );
};

export default LoginPage;