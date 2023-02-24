// import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from 'redux/authSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  // const isLogged = useSelector(state => state.auth.isLogged);
  // console.log(isLogged);

  const logoutHandler = () => {
    console.log('logout click');
    dispatch(logoutUser());
  }; 

  return (
    <div>
      HOme page
      <button type='button' onClick={logoutHandler}>Logout</button>
      <nav>
        <NavLink to="statistic">STATISTIC</NavLink>
        <NavLink to="create">Create task</NavLink>
        <NavLink to="profile">PROFILE</NavLink>
      </nav>
      <Outlet />
    </div>
    
  );
};

export default HomePage;
