import { NavLink } from 'react-router-dom';
import { LoginForm } from 'components/auth/LoginForm';
import { AuthPage } from 'components/auth/common/AuthPage/AuthPage';
import { AuthContent } from 'components/auth/common/AuthPage/AuthPage.styled';
import { AuthHeader } from 'components/auth/common/AuthHeader/AuthHeader';

const LoginPage = () => {
  return (
    <AuthPage>
      <AuthContent>
        <AuthHeader title="Don't you have an account?" link="/signup" navTo="Create an account" />
        <LoginForm />
        <NavLink to="/forgot-password">Forgot Password?</NavLink>
      </AuthContent>
    </AuthPage>
  );
};

export default LoginPage;