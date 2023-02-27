import { AuthHeaderNav, AuthHeaderLink, AuthHeaderLogo, AuthHeaderText } from "./AuthHeader.styled";
import { Logo } from "components/Logo/Logo";

export const AuthHeader = ({ title, link, navTo }) => {
  return (
    <>
      <AuthHeaderNav>
        {title} <AuthHeaderLink to={link}>{navTo}</AuthHeaderLink>
      </AuthHeaderNav>
      <AuthHeaderLogo>
        <Logo width="166" heigth="66" />
      </AuthHeaderLogo>
      <AuthHeaderText>Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias</AuthHeaderText>
    </>
  );
}