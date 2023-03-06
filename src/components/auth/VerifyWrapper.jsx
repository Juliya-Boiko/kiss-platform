import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Section } from "./common/Section.styled";
import { Logo } from "components/Logo/Logo";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MotionWrapper } from "./common/MotionWrapper.styled";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
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

const Text = styled(motion.p)`
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
        <Text
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.5, 0.71, 1, 1],
          }}
        >
          Provident similique accusantium nemo autem. Veritati obcaecati tenetur iure eius earum ut molestias
        </Text>
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
    </Container>
  );
};