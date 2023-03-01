import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllTasks } from "redux/tasks/tasksOperations";
import { getAllTasksAsync } from "api/tasks";

const StatisticPage = () => {
  const token = useSelector(state => state.auth.token);
  const tasks = useSelector(state => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks(token));    
  }, [dispatch, token]);

  return (
    <div>
      <h1>StatisticPage</h1>
      {tasks.length === 0 && <p>Tasks list EMPTY</p>}
      {tasks && <ul>
        {tasks.map(item => {
          return <li key={item._id}>{item.status} : {item.title}</li>
        })}
      </ul>}

    </div>
  );
};

export default StatisticPage;