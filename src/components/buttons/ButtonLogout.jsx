import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';

const BtnColored = styled(motion.button)`
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

const BtnTransparent = styled(motion.button)`
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
    dispatch(logoutUser(token));
  }; 

  return (
    <>
      { type === "colored"
        ? <BtnColored
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1],
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={logoutHandler}
          >
            Logout
          </BtnColored>
        : <BtnTransparent
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={logoutHandler}
          >
            Logout
          </BtnTransparent>
      }
    </>
  );
}