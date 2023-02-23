import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;