// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { MainContainer } from 'components/common/MainContainer.styled';
import styled from 'styled-components';
// import { Scrumbs } from 'components/Scrumbs/Scrumbs';
// import { MobileContainer } from 'components/common/MediaContainers.styled';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spaces.xxs} 0 ${p => p.theme.spaces.s} 0;
  //background-color: lightgoldenrodyellow;
`;

const HomePage = () => {



  return (
    <MainContainer>
      <Header />
      {/* <Loader size="40" /> */}
      {/* <nav>
        <NavLink to="statistic">STATISTIC</NavLink>
        <NavLink to="create">Create task</NavLink>
        <NavLink to="profile">PROFILE</NavLink>
      </nav> */}
      <Page>
        {/* <MobileContainer>
          <Scrumbs />
        </MobileContainer> */}
        
        <Outlet />
      </Page>
    </MainContainer>
    
  );
};

export default HomePage;

