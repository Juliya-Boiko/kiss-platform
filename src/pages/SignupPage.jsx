import { NavLink } from 'react-router-dom';
import { routes } from 'constants/routes';

const SignupPage = () => {
  return (
    <div>
      <p>
        You have an account?
        <NavLink to={routes.LOGIN}>Login</NavLink>
      </p>
      <h1>Signup form</h1>
    </div>
  );
};

export default SignupPage;