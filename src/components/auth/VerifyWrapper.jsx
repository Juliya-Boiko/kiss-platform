import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Section } from "./common/Section.styled";
import { Logo } from "components/Logo/Logo";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: lightseagreen;
`;

const Link = styled(NavLink)`
  display: block;
  position: absolute;
  top: ${p => p.theme.spaces.m};
  left: ${p => p.theme.spaces.xs};
  color: ${p => p.theme.colors.brand.green};
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
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 ${p => p.theme.spaces.l} 0 ;
    font-size: ${p => p.theme.fontSize.s};
  }
`;

export const VerifyWrapper = ({ backTo, children }) => {
  return (
    <Container>
      <Link to={backTo}><IoArrowBackCircleOutline size={32} /></Link>
      <Section>
        <Logo width="166" heigth="66" margin="60px" />
        <Text>Provident similique accusantium nemo autem. Veritati obcaecati tenetur iure eius earum ut molestias</Text>
        {children}
      </Section>
    </Container>
  );
};