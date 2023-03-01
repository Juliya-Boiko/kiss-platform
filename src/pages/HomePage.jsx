import { Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { MainContainer } from 'components/common/MainContainer.styled';
import styled from 'styled-components';
import { Dashboard } from 'components/Dashboard/Dashboard';

const Container = styled.div`
  height: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spaces.xxs} 0 ${p => p.theme.spaces.s} 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: ${p => p.theme.spaces.s} 0 ${p => p.theme.spaces.s} 0;
  }
`;

const Content = styled.div`
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding-left: 60px;
  }
`;
// {/* <Loader size="40" /> */}

const HomePage = () => {

  return (
    <MainContainer>
      <Container>
        <Dashboard />
        <Content>
          <Header />
          <Page>
            <Outlet />
          </Page>
        </Content>
      </Container>
    </MainContainer>
  );
};

export default HomePage;

