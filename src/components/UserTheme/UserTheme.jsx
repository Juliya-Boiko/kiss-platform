import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "style/theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/themeSlice";
import { CgMoon, CgSun } from "react-icons/cg";
import { ButtonIcon } from "components/buttons/ButonIcon";

const Container = styled(motion.div)`
  text-align: center;
  span {
    color: ${p => p.theme.colors.grayScale.gray50};
  }
  button { 
    margin: 10px auto 0 auto ;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      margin: 0;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-right: 30px;
    span { display: none }
  }
`;

export const UserTheme = () => {
  const { theme: customTheme } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <Container
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.5, 0.71, 1, 1],
      }}
    >
      <span>Change theme: </span>
      <ButtonIcon
        color={customTheme ? theme.colors.grayScale.gray50 : theme.colors.brand.white}
        onClick={() => dispatch(toggleTheme())}
      >
        {customTheme ? <CgMoon size="30" /> : <CgSun size="30" />}
      </ButtonIcon>
    </Container>

  );
}
