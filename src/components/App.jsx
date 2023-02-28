import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'hocs/PublicRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { Navigate } from 'react-router-dom';

const SignupPage = lazy(() => import('../pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const InsertCodePage = lazy(() => import('../pages/InsertCodePage'));
const ChangePasswordPage = lazy(() => import('../pages/ChangePasswordPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const StatisticPage = lazy(() => import('../pages/StatisticPage'));
const CreatePage = lazy(() => import('../pages/CreatePage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={
          <PublicRoute restricted><LoginPage /></PublicRoute>}
        />
        <Route path="signup" element={
          <PublicRoute restricted><SignupPage /></PublicRoute>}
        />
        <Route path="forgot-password" element={
          <PublicRoute restricted><ForgotPasswordPage /></PublicRoute>}
        />
        <Route path="insert-code/:email" element={
          <PublicRoute restricted><InsertCodePage /></PublicRoute>}
        />
        <Route path="change-password" element={
          <PublicRoute restricted><ChangePasswordPage /></PublicRoute>}
        />
        <Route path="homepage" element={<PrivateRoute><HomePage /></PrivateRoute>}>
          <Route index element={<StatisticPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="statistic" element={<StatisticPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
