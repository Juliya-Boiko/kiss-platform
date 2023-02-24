import { useNavigate } from "react-router-dom";
import { forgotPasswordAsync } from "api/auth";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const sendCodeHandler = async (e) => {
    e.preventDefault();
    console.log('Sending code click');
    await forgotPasswordAsync();
    navigate('/insert-code');
  }

  return (
    <div>
      ForgotPasswordPage
      <button type="submit" onClick={sendCodeHandler}>Send code</button>
    </div>
  );
};

export default ForgotPasswordPage;