import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PublicRoute = ({ children, restricted = false }) => { 
  const isLogged = useSelector(state => state.auth.isLogged);
  console.log('isLogged --->', isLogged);

  const redirect = isLogged && restricted;
  
  return (
    redirect ? <Navigate to="/homepage" /> : children
  );
}; 