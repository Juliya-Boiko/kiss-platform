import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const sendCodeHandler = (e) => {
    e.preventDefault();
    console.log('Sending code');
    navigate(routes.PASSWORD_INSERT);
  }

  return (
    <div>
      ForgotPasswordPage
      <button type="submit" onClick={sendCodeHandler}>Send code</button>
    </div>
  );
};

export default ForgotPasswordPage;