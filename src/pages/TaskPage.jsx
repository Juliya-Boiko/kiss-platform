import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskByIdAsync } from "api/tasks";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { UpdateForm } from "components/forms/task/UpdateForm";

const TaskPage = () => {
  const token = useSelector(state => state.auth.token);
  const [initValues, setInitValues] = useState(null);
  const { id } = useParams();

  const getTask = async (values) => {
    const { data } = await getTaskByIdAsync(values); 
    setInitValues(data.task);
  }

  useEffect(() => {
    const values = { id, token };
    getTask(values);
  }, [id, token]);

  return (
    <>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>

      <UpdateForm values={initValues} token={token} />
    </>
  );
};

export default TaskPage;