import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes";

const InsertCodePage = () => {
  const navigate = useNavigate();

  const confirmHandler = (e) => {
    e.preventDefault();
    console.log('Confirm code');
    navigate('/change-password');
  }

  return (
    <div>
      <h1>InsertPassword Form</h1>
      <button type="submit" onClick={confirmHandler}>Confirm</button>
    </div>
  );
};

export default InsertCodePage;