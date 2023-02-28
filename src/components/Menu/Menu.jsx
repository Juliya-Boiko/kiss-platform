import { Backdrop } from "components/common/Backdrop.styled";
import { Logo } from "components/Logo/Logo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonNav } from "components/buttons/ButtonNav";
import { useDispatch } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { RiDashboardLine } from "react-icons/ri";
import { BiUserCircle, BiAddToQueue } from "react-icons/bi";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Menu = ({ onClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navHandler = (link) => {
    onClick();
    navigate(link);
  };

  const logoutHandler = () => {
    console.log('logout click');
    dispatch(logoutUser());
  }; 

  return (
    <Backdrop>
      <Container>
        <Logo width="126" heigth="50" margin="0" />

        <ul>
          <Item>
            <ButtonNav onClick={() => navHandler("statistic")} title='Statistic'><RiDashboardLine size={30}/></ButtonNav>
          </Item>
          <Item>
            <ButtonNav onClick={() => navHandler("create")} title='Create task'><BiAddToQueue size={30} /></ButtonNav>
          </Item>
          <Item>
            <ButtonNav onClick={() => navHandler("profile")} title='Profile'><BiUserCircle size={30} /></ButtonNav>
          </Item>
        </ul>

        <button type='button' onClick={logoutHandler}>Logout</button>
      </Container>
    </Backdrop>
  );
};