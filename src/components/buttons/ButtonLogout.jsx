import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import styled from "styled-components";

const BtnColored = styled.button`
  display: block;
  width: 126px;
  padding: ${p => p.theme.spaces.xxs} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.xs};
  text-align: center;
  border: none;
  outline: none;
  border-radius: ${p => p.theme.borderRadius.s};
  color: ${p => p.theme.colors.brand.white};
  background-color: ${p => p.theme.colors.support.error};
  cursor: pointer;
`;

const BtnTransparent = styled.button`
  padding: 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.xs};
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.support.error};
  cursor: pointer;
`;

export const ButtonLogout = ({ type }) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    // console.log('logout click');
    dispatch(logoutUser(token));
  }; 

  return (
    <>
      { type === "colored"
        ? <BtnColored type="button" onClick={logoutHandler}>Logout</BtnColored>
        : <BtnTransparent type="button" onClick={logoutHandler}>Logout</BtnTransparent>
      }
    </>
  );
}