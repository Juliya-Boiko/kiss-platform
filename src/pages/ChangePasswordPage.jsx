// import { useDispatch } from "react-redux";
// import { changePassword } from "redux/auth/authOperations";
import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { PasswordForm } from "components/forms/PasswordForm";

const ChangePasswordPage = () => {
  // const dispatch = useDispatch();

  // const changeHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Password changed');
  //   dispatch(changePassword());
  // }

  return (
    <VerifyWrapper backTo="/insert-code">
      <PasswordForm />
    </VerifyWrapper>
    // <div>
    //   <h1>Change Password Form</h1>
    //   <input type="text" />
    //   <button type="submit" onClick={changeHandler}>Change password</button>
    // </div>
  );
};

export default ChangePasswordPage;