import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  padding: ${p => p.theme.spaces.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.brand.white};
`;