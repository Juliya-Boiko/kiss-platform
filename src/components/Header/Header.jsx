import { Logo } from "components/Logo/Logo";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { ButtonIcon } from "components/buttons/ButonIcon";
import { theme } from "style/theme";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Menu } from "components/Menu/Menu";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spaces.s} 0 ${p => p.theme.spaces.xxs};
  //background-color: lightyellow;
`;

const Avatar = styled.img`
  display: block;
  width: 44px;
  border-radius: 50%;
`;

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const src = useSelector(state => state.auth.avatar);

  return (
    <Container>
      <ButtonIcon color={theme.colors.brand.green} onClick={() => setShowMenu(true)}><FiMenu size={30}/></ButtonIcon>
      <Logo width="126" heigth="50" margin="0" />
      <Avatar src={src} alt="Avatar" />

      {showMenu && <Menu onClick={() => setShowMenu(false)} />}
    </Container>
  );
};