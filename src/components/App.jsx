import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'constants/routes';

const SignupPage = lazy(() => import('../pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const InsertPasswordPage = lazy(() => import('../pages/InsertPasswordPage'));
const ChangePasswordPage = lazy(() => import('../pages/ChangePasswordPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));


export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOMEPAGE} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.PASSWORD_FORGOT} element={<ForgotPasswordPage />} />
        <Route path={routes.PASSWORD_INSERT} element={<InsertPasswordPage />} />
        <Route path={routes.PASSWORD_CHANGE} element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  );
};
