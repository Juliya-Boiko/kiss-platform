import styled from "styled-components";
import bgiImg from '../../images/auth-bgi.png';
import retangleImg from '../../images/auth-retangle.png';
import { Logo } from "components/Logo/Logo";
import { NavLink } from "react-router-dom";
import { Section } from "./common/Section.styled";

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

const Nav = styled.p`
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

const Image = styled.img`
  margin: 0 0 ${p => p.theme.spaces.m} 0 ;
`;

const Text = styled.p`
  text-align: center;
  font-weight: ${p => p.weight};
  margin: 0 0 ${p => p.margin} 0 ;
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
`;

export const AuthWrapper = ({ children, navTitle, navLink, navTo }) => {
  return (
    <Container>
      <Main>
        <Section>
          <Nav>{navTitle} <Link to={navLink}>{navTo}</Link></Nav>
          <Logo width="166" heigth="66" margin="60px" />
          <Text weight="400" margin="20px">Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias</Text>
          {children}
        </Section>
      </Main>

      <Addictional>
        <Image src={retangleImg} alt="Laptop" />
        <Text weight="700" margin="20px">Revolutionizing the patent market</Text>
        <Text weight="300" margin="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</Text>
      </Addictional>
    </Container>
  );
};