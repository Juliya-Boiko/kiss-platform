import { SignupForm } from 'components/SignupForm';
import { AuthPage, AuthPageTitle, AuthPageLink, AuthPageLogo, AuthPageText } from './AuthPage.styled';
import { Logo } from 'components/Logo/Logo';

const SignupPage = () => {
  return (
    <AuthPage>
      <AuthPageTitle>
        You have an account? <AuthPageLink to="/login">Login</AuthPageLink>
      </AuthPageTitle>
      <AuthPageLogo>
        <Logo width="166" heigth="66" />
      </AuthPageLogo>
      <AuthPageText>Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias</AuthPageText>
      <SignupForm />
    </AuthPage>
  );
};

export default SignupPage;