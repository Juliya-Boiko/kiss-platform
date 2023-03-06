import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { statusSorting, titleSorting, dateSorting } from "helpers";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { FilterForm } from "components/forms/task/FilterForm";
import { CardsList } from "components/CardsList/CardsList";
import { TasksTable } from "components/TasksTable/TasksTable";
import { Chart } from "components/Chart/Chart";
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

const Wrapper = styled(motion.div)`
  margin: 0 0 ${p => p.theme.spaces.xs} 0;
`;

const StatisticPage = () => {
  const filter = useSelector(state => state.tasks.filter);
  const token = useSelector(state => state.auth.token);
  const items = useSelector(state => state.tasks.items);
  const [filteredItems, setFilteredItems] = useState(items);
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

  const sortHandler = (column) => {
    if (column === 'Status') {
      setFilteredItems(statusSorting(filteredItems));
    }
    if (column === 'Title') {
      setFilteredItems([...titleSorting(filteredItems)]);
    }
    if (column === 'Publish') {
      setFilteredItems([...dateSorting(filteredItems)]);
    }
  };

  return (
    <div>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>

      <Wrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4,
          ease: [0.5, 0.71, 1, 1],
        }}
      >
        <FilterForm />
      </Wrapper>

      {loading
        ? <Loader size="40" colored />
        : <Container>
            <Content>
              <CardsList items={items} />
              <TasksTable items={filteredItems} sortHandler={sortHandler} />
            </Content>
            <Chart items={items} />
          </Container>
      }
    </div>
  );
};

export default StatisticPage;