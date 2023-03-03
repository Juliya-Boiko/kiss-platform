import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskByIdAsync } from "api/tasks";
import { MobileContainer } from "components/common/MediaContainers.styled";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { UpdateForm } from "components/forms/task/UpdateForm";
import { Loader } from "components/Loader/Loader";

const TaskPage = () => {
  const token = useSelector(state => state.auth.token);
  const [initValues, setInitValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getTask = async (values) => {
    const { data } = await getTaskByIdAsync(values); 
    setInitValues(data.task);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    const values = { id, token };
    getTask(values);
  }, [id, token]);

  return (
    <>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>

      {loading ? <Loader size="40" colored /> : <UpdateForm values={initValues} token={token} />}
    </>
  );
};

export default TaskPage;