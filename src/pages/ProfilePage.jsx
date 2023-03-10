import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "redux/auth/authOperations";
import { ProfileForm } from "components/forms/auth/ProfileForm";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { ButtonDelete } from "components/buttons/ButtonDelete";
import { Warning } from "components/Warning/Warning";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  margin: 0 auto ${p => p.theme.spaces.xs} auto;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    div {
      transform: translateY(0);
    }
  }

  div {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 10px 0 0 0;
    text-align: center;
    color: #FFFFFF;
    background-color: rgba(21, 21, 21, 0.79);
    transform: translateY(100%);
  }
`;

const Avatar = styled.img`
display: block;
  width: 164px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 auto ${p => p.theme.spaces.m} auto;
  }
`;

const ProfilePage = () => {
  const [showWarn, setShowWarn] = useState(false);
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.5, 0.71, 1, 1],
        }}
      >
        <Avatar src={user.avatar} alt="" />
        <div><MdOutlinePhotoCamera size={20}/> Change avatar</div>
      </Wrapper>
      
      <ProfileForm />

      <ButtonDelete title="Delete account" onClick={() => setShowWarn(true)} />
        
      {showWarn && <Warning onCancel={() => setShowWarn(false)} onConfirm={()=> dispatch(deleteUser(user.token))}>
        <p>You sure you want delete youre account ?</p>
      </Warning> }
    </Container>
  );
};

export default ProfilePage;