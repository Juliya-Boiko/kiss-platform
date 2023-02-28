import { getUserAsync } from "api/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserId } from "redux/auth/authOperations";
import { VerifyWrapper } from "components/auth/VerifyWrapper";
import { CodeForm } from "components/forms/CodeForm";

const InsertCodePage = () => {
  const { email } = useParams();
  const [verificationToken, seVerificationToken] = useState(null);
  const dispatch = useDispatch();
  
  const getToken = async (email) => {
    await getUserAsync(email).then(response => seVerificationToken(response.verificationToken));
  } 
  
  useEffect(() => {
    dispatch(getUserId(email));
    getToken(email);
  }, [dispatch, email]);

  return (
    <VerifyWrapper backTo="/forgot-password">
      <CodeForm verificationToken={verificationToken} />
    </VerifyWrapper>
  );
};

export default InsertCodePage;