import { Puff } from 'react-loader-spinner';
import { theme } from 'style/theme';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: white;
`;

export const Loader = ({ size, colored }) => {
  return (
    <Container>
      <Puff
        height={size}
        width={size}
        radius={1}
        color={colored ? theme.colors.brand.green : theme.colors.brand.white}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
}