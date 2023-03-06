import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader size="100" colored />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
