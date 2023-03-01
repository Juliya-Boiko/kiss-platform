import { CreateForm } from "components/forms/task/CreateForm";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";

const CreatePage = () => {
  return (
    <>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>
      <CreateForm />
    </>
  );
};

export default CreatePage;