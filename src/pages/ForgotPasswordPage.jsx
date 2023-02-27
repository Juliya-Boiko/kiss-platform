import { AuthUser } from "components/auth/common/AuthUser/AuthUser";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Logo } from "components/Logo/Logo";
import { EmailForm } from "components/auth/forms/EmailForm";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const BackLink = styled(NavLink)`
  color: ${p => p.theme.colors.brand.green};
  display: block;
  position: absolute;
  top: ${p => p.theme.spaces.m};
  left: ${p => p.theme.spaces.xs};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    top: ${p => p.theme.spaces.xs};
  }
`;

const Text = styled.p`
  margin: 0 0 ${p => p.theme.spaces.xs} 0 ;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.5;
  text-align: center;
  color: ${p => p.theme.colors.grayScale.gray30};
`;

const ForgotPasswordPage = () => {

  return (
    <AuthUser>
      <BackLink to="/login"><IoArrowBackCircleOutline size={32} /></BackLink>
      <Logo width="166" heigth="66" margin="60px" />
      <Text>Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias</Text>
      <EmailForm />
    </AuthUser>
  );
};

export default ForgotPasswordPage;