import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${p => p.bgColor ? '#ffffff' : '#000000'};
`;