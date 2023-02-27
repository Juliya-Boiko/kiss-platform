// import { useNavigate } from "react-router-dom";
// import { getUserAsync } from "api/auth";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getUserId } from "redux/auth/authOperations";
import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { CodeForm } from "components/forms/CodeForm";

const InsertCodePage = () => {
  // const [code, setCode] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  
  // const getUser = async () => {
  //  await getUserAsync().then(response => setCode(response.verificationToken));
  // } 
  // useEffect(() => {
  //   getUser();
  // }, []);

  // const inputHandler = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const confirmHandler = async (e) => {
  //   e.preventDefault();
  //   if (code === inputValue) {
  //     dispatch(getUserId());
  //     navigate('/change-password')
  //   } else {
  //     console.log('NOT right code');
  //     console.log('right code--->', code);
  //   }
  // }

  return (
    <VerifyWrapper backTo="/forgot-password">
      <CodeForm />
      {/* <input type="text" value={inputValue} onChange={inputHandler} />
      <button type="submit" onClick={confirmHandler}>Confirm</button> */}
    </VerifyWrapper>
  );
};

export default InsertCodePage;