import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { EmailForm } from "components/forms/auth/EmailForm";

const ForgotPasswordPage = () => {
  return (
    <VerifyWrapper backTo="/login">
      <EmailForm />
    </VerifyWrapper>
  );
};

export default ForgotPasswordPage;