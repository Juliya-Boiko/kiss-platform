import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { PasswordForm } from "components/forms/auth/PasswordForm";

const ChangePasswordPage = () => {
  return (
    <VerifyWrapper backTo="/insert-code">
      <PasswordForm />
    </VerifyWrapper>
  );
};

export default ChangePasswordPage;