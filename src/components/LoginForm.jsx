import { useDispatch } from "react-redux";
import { loginUser } from "redux/authSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();
    console.log('login submit');
    dispatch(loginUser());
  };

  return (
    <form onSubmit={signupHandler}>
      <input type="text" />
      <input type="text" />
      <button type="submit">Login</button>
    </form>
  );
}