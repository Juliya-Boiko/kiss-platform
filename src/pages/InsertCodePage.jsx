// import { useNavigate } from "react-router-dom";
// import { getUserAsync } from "api/auth";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getUserId } from "redux/auth/authOperations";
import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { CodeForm } from "components/forms/CodeForm";

const InsertCodePage = () => {
  //const [verCode, setVerCode] = useState(initialState);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  
  // const getUser = async () => {
  //  await getUserAsync().then(response => setCode(response.verificationToken));
  // } 
  
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <VerifyWrapper backTo="/forgot-password">
      <CodeForm />
    </VerifyWrapper>
  );
};

export default InsertCodePage;