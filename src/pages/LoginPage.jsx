import { NavLink } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <p>
        Don't you have an account?
        <NavLink to="/signup">Create an account</NavLink>
      </p>
      <LoginForm />
      <NavLink to="/forgot-password">Forgot Password?</NavLink>
    </div>
  );
};

export default LoginPage;