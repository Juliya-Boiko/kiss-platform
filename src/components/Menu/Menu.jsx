import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "components/common/Backdrop.styled";
import { Logo } from "components/Logo/Logo";
import { ButtonNav } from "components/buttons/ButtonNav";
import { RiDashboardLine } from "react-icons/ri";
import { BiUserCircle, BiAddToQueue } from "react-icons/bi";
import { ButtonLogout } from "components/buttons/ButtonLogout";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spaces.s};
  }
`;

export const Menu = ({ onClick }) => {
  const navigate = useNavigate();

  const navHandler = (link) => {
    onClick();
    navigate(link);
  };

  return (
    <Backdrop>
      <Container>
        <Logo width="126" heigth="50" margin="0" />

        <motion.ul
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.5, 0.71, 1, 1],
          }}
        >
          <Item>
            <ButtonNav onClick={() => navHandler("statistic")} title='Statistic'><RiDashboardLine size={30}/></ButtonNav>
          </Item>
          <Item>
            <ButtonNav onClick={() => navHandler("create")} title='Create task'><BiAddToQueue size={30} /></ButtonNav>
          </Item>
          <Item>
            <ButtonNav onClick={() => navHandler("profile")} title='Profile'><BiUserCircle size={30} /></ButtonNav>
          </Item>
        </motion.ul>

        <ButtonLogout type={'colored'}/>
      </Container>
    </Backdrop>
  );
};