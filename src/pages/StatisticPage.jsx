import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { FilterForm } from "components/forms/task/FilterForm";
import { Cards } from "components/Cards/Cards";
import { TasksTable } from "components/TasksTable/TasksTable";
import { Chart } from "components/Chart/Chart";
import styled from "styled-components";
import { Loader } from "components/Loader/Loader";

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
  const filter = useSelector(state => state.tasks.filter);
  const token = useSelector(state => state.auth.token);
  const items = useSelector(state => state.tasks.items);
  const [filteredItemd, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllTasks(token));
    setLoading(false);
  }, [dispatch, token]);

  useEffect(() => {
    const data = items.filter(item => item.title.toLowerCase().includes(filter));
    setFilteredItems(data);
  }, [filter, items]);

  return (
    <div>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>

      <FilterForm />

      {loading
        ? <Loader size="40" colored />
        : <Container>
            <Content>
              <Cards items={items} />
              <TasksTable items={filteredItemd} />
            </Content>
            <Chart items={items} />
          </Container>
      }
    </div>
  );
};

export default StatisticPage;