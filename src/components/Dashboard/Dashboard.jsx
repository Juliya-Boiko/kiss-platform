import styled from "styled-components";
import { Logo } from "components/Logo/Logo";
import { RiDashboardLine } from "react-icons/ri";
import { BiUserCircle, BiAddToQueue } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: center;
    padding: ${p => p.theme.spaces.s} 0;
    border: 1px solid ${p => p.theme.colors.grayScale.gray40};
  }
`;

const List = styled.ul`
  width: 100%;
`;

const Link = styled(NavLink)`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spaces.xs} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
  color: ${p => p.theme.colors.complementary.green};
  &.active {
    border-right: 7px solid ${p => p.theme.colors.complementary.green};
    background-color: #6bc2bb33;
    color: ${p => p.theme.colors.complementary.green};
  }
`;

export const Dashboard = () => {

  return (
    <Container>
      <Logo width="150" heigth="60" margin="143px" />
      <List>
        <li>
          <Link to="statistic"><RiDashboardLine size={30}/><span>Statistic</span></Link>
        </li>
        <li>
          <Link to="create"><BiAddToQueue size={30} /><span>Create task</span></Link>
        </li>
        <li>
          <Link to="profile"><BiUserCircle size={30} /><span>Profile</span></Link>
        </li>
      </List>
    </Container>
  );
};