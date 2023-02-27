import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  //padding: 0 ${p => p.theme.spaces.xs};
  outline: 1px solid red;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 0 ${p => p.theme.spaces.xl};
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <MainContainer> */}
          <Outlet />
        {/* </MainContainer> */}
      </Suspense>
    </div>
  );
}

export default SharedLayout;
