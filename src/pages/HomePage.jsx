import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { MainContainer } from 'components/common/MainContainer.styled';

const HomePage = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('logout click');
    dispatch(logoutUser());
  }; 

  return (
    <MainContainer>
      <Header />
      <Loader size="40" />
      <button type='button' onClick={logoutHandler}>Logout</button>
      <nav>
        <NavLink to="statistic">STATISTIC</NavLink>
        <NavLink to="create">Create task</NavLink>
        <NavLink to="profile">PROFILE</NavLink>
      </nav>
      <Outlet />
    </MainContainer>
    
  );
};

export default HomePage;

