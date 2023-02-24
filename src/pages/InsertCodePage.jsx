// import { useNavigate } from "react-router-dom";
import { getUserAsync } from "api/auth";

const InsertCodePage = () => {
  // const navigate = useNavigate();
  getUserAsync();

  const confirmHandler = (e) => {
    e.preventDefault();
    console.log('Confirm code');
   // navigate('/change-password');
  }

  return (
    <div>
      <h1>Insert code Form</h1>
      <input type="text" />
      <button type="submit" onClick={confirmHandler}>Confirm</button>
    </div>
  );
};

export default InsertCodePage;