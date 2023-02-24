import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    console.log('Password changed');
    navigate('/homepage');
  }

  return (
    <div>
      <h1>Change Password Form</h1>
      <button type="submit" onClick={changeHandler}>Confirm</button>
    </div>
  );
};

export default ChangePasswordPage;