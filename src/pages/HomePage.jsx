// import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const HomePage = () => {

  // const isLogged = useSelector(state => state.auth.isLogged);
  // console.log(isLogged);

  return (
    <div>
      HOme page
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

