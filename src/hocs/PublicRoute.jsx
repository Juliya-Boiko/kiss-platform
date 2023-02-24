import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { routes } from "constants/routes";

export const PublicRoute = ({ children, restricted = false }) => { 
  const isLogged = useSelector(state => state.auth.isLogged);

  const redirect = isLogged && restricted;
  
  return (
    redirect ? <Navigate to={routes.HOMEPAGE} /> : children
  );
}; 