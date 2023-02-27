import { SignupForm } from "components/forms/SignupForm";
import { AuthWrapper } from "components/auth/AuthWrapper";

const SignupPage = () => {
  return (
    <AuthWrapper navTitle="You have an account?" navLink="/login" navTo="Login">
      <SignupForm />
    </AuthWrapper>
  );
};

export default SignupPage;