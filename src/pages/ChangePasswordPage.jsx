import { useNavigate } from "react-router-dom";
import { changePasswordAsync } from "api/auth";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    console.log('Password changed');
    changePasswordAsync();
   // navigate('/homepage');
  }

  return (
    <div>
      <h1>Change Password Form</h1>
      <input type="text" />
      <button type="submit" onClick={changeHandler}>Change password</button>
    </div>
  );
};

export default ChangePasswordPage;