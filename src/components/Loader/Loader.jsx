import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import { theme } from 'style/theme';

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
  background-color: ${p => p.bgColor ? p.theme.colors.brand.white : p.theme.colors.brand.black };
`;

export const Loader = ({ size, colored }) => {
  const { theme: customTheme } = useSelector(state => state.theme);

  return (
    <Container bgColor={customTheme}>
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