import { CreateForm } from "components/forms/task/CreateForm";
import { Scrumbs } from "components/Scrumbs/Scrumbs";
import { MobileContainer } from "components/common/MediaContainers.styled";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 1919px) {
    width: 100%;
  }
`;

const CreatePage = () => {
  return (
    <Container>
      <MobileContainer>
        <Scrumbs />
      </MobileContainer>
      <CreateForm />
    </Container>
  );
};

export default CreatePage;