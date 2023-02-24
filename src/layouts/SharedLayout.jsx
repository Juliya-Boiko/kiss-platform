import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line
import { routes } from 'constants/routes';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom';

const SharedLayout = () => {
  // eslint-disable-next-line
  const isLogged = useSelector(state => state.auth.isLogged);

  // console.log(isLogged);
  return (
    <div>
      <p>shared layout will be page container</p>
      {/* <nav>
        <NavLink to={routes.HOMEPAGE}>Homepage</NavLink>
        <NavLink to={routes.SIGNUP}>Signup</NavLink>
        <NavLink to={routes.LOGIN}>Login</NavLink>
      </nav> */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* {isLogged
          ? <nav>
              <NavLink to={routes.HOMEPAGE}>Homepage</NavLink>
              <NavLink to={routes.SIGNUP}>Signup</NavLink>
              <NavLink to={routes.LOGIN}>Login</NavLink>
            </nav>
          : null} */}
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
