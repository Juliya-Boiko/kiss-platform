import styled from "styled-components";
import imgSrc from '../images/not-found.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.grayScale.gray50};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
`;

const Image = styled.img`
  margin-bottom: 30px;
`;

export const NotFoundPage = () => {
  return (
    <Container>
      <Content>
        <Image src={imgSrc} alt="Not found" />
        <p>We didn't find what we needed, please make sure your input information is correct!</p>
      </Content>
    </Container>
  );
};