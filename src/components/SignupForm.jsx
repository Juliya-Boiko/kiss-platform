import { useDispatch } from "react-redux";
import { signupUser } from "redux/authSlice";
//import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const signupHandler = (e) => {
    e.preventDefault();
    console.log('submit');
    //navigate('/homepage');
    dispatch(signupUser());
  };

  return (
    <form onSubmit={signupHandler}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button type="submit">Signup</button>
    </form>
  );
}