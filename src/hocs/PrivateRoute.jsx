import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { routes } from "constants/routes";

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    !isLogged
      ? <Navigate to={routes.SIGNUP} />
      : children
  );
};