import { Puff } from 'react-loader-spinner';
import { theme } from 'style/theme';

export const Loader = ({ size }) => {
  return (
    <Puff
      height={size}
      width={size}
      radius={1}
      color={theme.colors.brand.green}
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}