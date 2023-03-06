import styled from 'styled-components';
import { motion } from "framer-motion";
import { LoginForm } from 'components/forms/auth/LoginForm';
import { AuthWrapper } from 'components/auth/AuthWrapper';
import { NavLink } from 'react-router-dom';

const Wrapper = styled(motion.div)`
  margin: ${p => p.theme.spaces.xs} 0 0 auto;
  text-align: end;
`;

const Link = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.brand.green};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: ${p => p.theme.fontSize.s};
  }
`;

const LoginPage = () => {
  return (
    <AuthWrapper navTitle="Don't you have an account?" navLink="/signup" navTo="Create an account" >
      <LoginForm />
      <Wrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.5, 0.71, 1, 1],
        }}
      >
        <Link to="/forgot-password">Forgot password</Link>
      </Wrapper>
    </AuthWrapper>
  );
};

export default LoginPage;