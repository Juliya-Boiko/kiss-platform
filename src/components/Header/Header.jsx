import styled from "styled-components";
import { Logo } from "components/Logo/Logo";
import { FiMenu } from "react-icons/fi";
import { ButtonIcon } from "components/buttons/ButonIcon";
import { theme } from "style/theme";
import { useState } from "react";
import { Menu } from "components/Menu/Menu";
import { User } from "./User";
import { UserTheme } from "../UserTheme/UserTheme";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { DesktopContainer } from "components/common/MediaContainers.styled";
import { MobileContainer } from "components/common/MediaContainers.styled";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spaces.s} 0 ${p => p.theme.spaces.xxs};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
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

      <Actions>
        <DesktopContainer>
          <UserTheme />
        </DesktopContainer>
        <User />
      </Actions>

      {showMenu && <Menu onClick={() => setShowMenu(false)} />}
    </Container>
  );
};

