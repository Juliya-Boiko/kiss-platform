import { lazy } from 'react';
import { routes } from 'constants/routes';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'hocs/PublicRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { Navigate } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

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
const TaskPage = lazy(() => import('../pages/TaskPage'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.SHARED} element={<SharedLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path={routes.LOGIN} element={
          <PublicRoute restricted><LoginPage /></PublicRoute>}
        />
        <Route path={routes.SIGNUP} element={
          <PublicRoute restricted><SignupPage /></PublicRoute>}
        />
        <Route path={routes.PASSWORD_FORGOT} element={
          <PublicRoute restricted><ForgotPasswordPage /></PublicRoute>}
        />
        <Route path={routes.CODE_INSERT} element={
          <PublicRoute restricted><InsertCodePage /></PublicRoute>}
        />
        <Route path={routes.PASSWORD_CHANGE} element={
          <PublicRoute restricted><ChangePasswordPage /></PublicRoute>}
        />
        <Route path={routes.HOMEPAGE} element={<PrivateRoute><HomePage /></PrivateRoute>}>
          <Route index element={<StatisticPage />} />
          <Route path={routes.PROFILE} element={<ProfilePage />} />
          <Route path={routes.TASK_CREATE} element={<CreatePage />} />
          <Route path={routes.STATISTIC} element={<StatisticPage />} />
          <Route path={routes.TASK_EDIT} element={<TaskPage />} />
          <Route path={routes.DEFAULT} element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
