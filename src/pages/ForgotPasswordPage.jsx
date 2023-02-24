import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const sendCodeHandler = (e) => {
    e.preventDefault();
    console.log('Sending code');
    navigate('/insert-code');
    // <Navigate to="/insert-code" />
  }

  return (
    <div>
      ForgotPasswordPage
      <button type="submit" onClick={sendCodeHandler}>Send code</button>
    </div>
  );
};

export default ForgotPasswordPage;