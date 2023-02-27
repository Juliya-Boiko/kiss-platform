import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: 350px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 450px;
  }
`;