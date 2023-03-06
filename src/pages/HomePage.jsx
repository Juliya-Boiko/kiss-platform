import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainContainer } from 'components/common/MainContainer.styled';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { useSelector } from 'react-redux';

const Container = styled.div`
  min-height: 100vh;
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

const HomePage = () => {
  const { theme } = useSelector(state => state.theme);
  // console.log(theme);

  return (
    <MainContainer bgColor={theme}>
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

