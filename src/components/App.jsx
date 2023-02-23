import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line
const SignupPage = lazy(() => import('../pages/SignupPage'));
// eslint-disable-next-line
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      {/* Kiss Platform */}
    </Routes>
  );
};
