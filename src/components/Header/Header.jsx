import { Logo } from "components/Logo/Logo";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { ButtonIcon } from "components/buttons/ButonIcon";
import { theme } from "style/theme";
import { useState } from "react";
import { Menu } from "components/Menu/Menu";
import { User } from "./User";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
// import { Scrumbs } from "../Scrumbs/Scrumbs";
import { DesktopContainer } from "components/common/MediaContainers.styled";
import { MobileContainer } from "components/common/MediaContainers.styled";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spaces.s} 0 ${p => p.theme.spaces.xxs};
  //background-color: lightyellow;
`;

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <DesktopContainer>
        <Scrumbs />
      </DesktopContainer>

      <MobileContainer>
        <ButtonIcon color={theme.colors.brand.green} onClick={() => setShowMenu(true)}><FiMenu size={30}/></ButtonIcon>
      </MobileContainer>

      <MobileContainer>
        <Logo width="126" heigth="50" margin="0" />
      </MobileContainer>

      <User />

      {showMenu && <Menu onClick={() => setShowMenu(false)} />}
    </Container>
  );
};