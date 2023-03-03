import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProfileForm } from "components/forms/auth/ProfileForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 164px;
  margin: 0 auto ${p => p.theme.spaces.xs} auto;
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 auto ${p => p.theme.spaces.m} auto;
  }
`;

const ProfilePage = () => {
  const user = useSelector(state => state.auth);
  //console.log(user);

  return (
    <Container>
      <Avatar src={user.avatar} alt="" />
      <ProfileForm />
    </Container>
  );
};

export default ProfilePage;