import styled from "styled-components";
import { useSelector } from "react-redux";
import { ButtonLogout } from "components/Logout/Logout";

const Container = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

const Info = styled.div`
  display: none;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
  color: ${p => p.theme.colors.grayScale.gray50};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: block;
    margin: 0 ${p => p.theme.spaces.xxs} 0 0;
    text-align: end;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 44px;
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 59px;
  }
`;

export const User = () => {
  const user = useSelector(state => state.auth);

  return (
    <Container>
      {user &&
        <>
          <Info>
            <p>Hi, {user.name}</p>
            <ButtonLogout />
          </Info>
          <Avatar src={user.avatar} alt="Avatar" />
        </>
      }
    </Container>
  );
};