import { useParams } from "react-router-dom";

const TaskPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>TaskPage</h1>
      <p>{id}</p>
    </div>
  );
};

export default TaskPage;