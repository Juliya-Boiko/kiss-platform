import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spaces.xs};
  //background-color: lightgray;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
    padding: 0 ${p => p.theme.spaces.s};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 0 ${p => p.theme.spaces.xl};
  }
`;