import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { FilterForm } from "components/forms/task/FilterForm";
import { Cards } from "components/Cards/Cards";
import { TasksList } from "components/TasksList/TasksList";
import { Chart } from "components/Chart/Chart";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
   flex-direction: row;
  }
`;

const Content = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 950px;
    margin-right: 60px;
  }
`;

const StatisticPage = () => {
  const token = useSelector(state => state.auth.token);
  const items = useSelector(state => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks(token));    
  }, [dispatch, token]);

  return (
    <div>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>

      <FilterForm />

      <Container>
        <Content>
          <Cards items={items} />
          <TasksList items={items} />
        </Content>
        <Chart items={items} />
      </Container>

    </div>
  );
};

export default StatisticPage;