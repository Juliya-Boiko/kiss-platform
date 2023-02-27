
// import styled from "styled-components";
import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { EmailForm } from "components/forms/EmailForm";

const ForgotPasswordPage = () => {

  return (
    <VerifyWrapper backTo="/login">
      <EmailForm />
    </VerifyWrapper>

    // <AuthUser>
    //   <BackLink to="/login"><IoArrowBackCircleOutline size={32} /></BackLink>
    //   <Logo width="166" heigth="66" margin="60px" />
    //   <Text>Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias</Text>
    //   <EmailForm />
    // </AuthUser>
  );
};

export default ForgotPasswordPage;