import styled from "styled-components";

 export const MobileContainer = styled.div`
  display: block;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: block;
  }
`;