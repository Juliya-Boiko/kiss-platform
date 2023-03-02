import { useSelector } from "react-redux";
import { ProfileForm } from "components/forms/auth/ProfileForm";
import styled from "styled-components";

const Avatar = styled.img`
  width: 164px;
  margin: 0 auto ${p => p.theme.spaces.xs} auto;
  border-radius: 50%;
`;

const ProfilePage = () => {
  const user = useSelector(state => state.auth);
  //console.log(user);

  return (
    <div>
      <Avatar src={user.avatar} alt="" />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;