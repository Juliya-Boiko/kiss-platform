import { SignupForm } from 'components/auth/forms/SignupForm';
import { AuthPage } from 'components/auth/common/AuthPage/AuthPage';
import { AuthHeader } from 'components/auth/common/AuthHeader/AuthHeader';
import { AuthContent } from 'components/auth/common/AuthPage/AuthPage.styled';

const SignupPage = () => {
  return (
    <AuthPage>
      <AuthContent>
        <AuthHeader title="You have an account?" link="/login" navTo="Login" />
        <SignupForm />
      </AuthContent>
    </AuthPage>
  );
};

export default SignupPage;