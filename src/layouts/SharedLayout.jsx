import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from 'constants/routes';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to={routes.HOMEPAGE}>Homepage</NavLink>
        <NavLink to={routes.SIGNUP}>Signup</NavLink>
        <NavLink to={routes.LOGIN}>Login</NavLink>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;