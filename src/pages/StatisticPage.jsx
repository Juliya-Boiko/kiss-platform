import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { FilterForm } from "components/forms/task/FilterForm";
import { Cards } from "components/Cards/Cards";

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

      <Cards items={items} />

      {items.length === 0 && <p>Tasks list EMPTY</p>}
      {items && <ul>
        {items.map(item => {
          return <li key={item._id}>{item.status} : {item.title}</li>
        })}
      </ul>}

    </div>
  );
};

export default StatisticPage;