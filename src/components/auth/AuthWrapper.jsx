import styled from "styled-components";
import bgiImg from '../../images/auth-bgi.png';
import { motion } from "framer-motion";
import { Logo } from "components/Logo/Logo";
import { NavLink } from "react-router-dom";
import { Section } from "./common/Section.styled";
import { MotionWrapper } from "../common/MotionWrapper.styled";
import { AuthSlider } from "./AuthSlider";
import { AuthText } from "./common/AuthText.styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.theme.spaces.xs};
  color: ${p => p.theme.colors.grayScale.gray30};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

const Nav = styled(motion.p)`
  margin: 0 0 ${p => p.theme.spaces.s} 0 ;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.grayScale.gray30};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 ${p => p.theme.spaces.l} 0 ;
    font-size: ${p => p.theme.fontSize.s};
  }
`;

const Link = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.brand.green};
`;

const Addictional = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.colors.brand.green};
    background-image: url(${bgiImg});
    background-size: cover;
    color: ${p => p.theme.colors.brand.white};
  }
`;

export const AuthWrapper = ({ children, navTitle, navLink, navTo }) => {
  return (
    <Container>
      <Main>
        <Section>
          <Nav
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.5, 0.71, 1, 1],
            }}
          >
            {navTitle} <Link to={navLink}>{navTo}</Link>
          </Nav>
          <Logo width="166" heigth="66" margin="60px" />
          <AuthText
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.5, 0.71, 1, 1],
            }}
            weight="400"
            margin="20px"
          >
            Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias
          </AuthText>
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1],
            }}
          >
            {children}
          </MotionWrapper>
        </Section>
      </Main>

      <Addictional>
        <AuthSlider />
      </Addictional>
    </Container>
  );
};