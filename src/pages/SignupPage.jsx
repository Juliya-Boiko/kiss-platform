import { NavLink } from 'react-router-dom';
import { routes } from 'constants/routes';
import { SignupForm } from 'components/SignupForm';

const SignupPage = () => {
  return (
    <div>
      <p>
        You have an account?
        <NavLink to="/login">Login</NavLink>
      </p>
      <SignupForm />
    </div>
  );
};

export default SignupPage;