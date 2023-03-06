import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spaces.xs};
  background-color: ${p => p.bgColor ? '#ffffff' : '#000000'};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
    padding: 0 ${p => p.theme.spaces.s};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 0 ${p => p.theme.spaces.xl};
  }
`;