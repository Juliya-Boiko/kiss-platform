import { NavLink } from 'react-router-dom';
import { routes } from 'constants/routes';

const LoginPage = () => {
  return (
    <div>
      <p>
        Don't you have an account?
        <NavLink to={routes.SIGNUP}>Create an account</NavLink>
      </p>
      <h1>Login form</h1>
      <NavLink to={routes.PASSWORD_FORGOT}>Forgot Password?</NavLink>
    </div>
  );
};

export default LoginPage;