import moment from "moment";
import styled from "styled-components";

const Text = styled.p`
  margin: 0 ${p => p.theme.spaces.s} 0 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grayScale.gray20};
`;

export const DateLocal = () => {
  const date = moment().format('dddd') + ' ' + moment().format('DD MMMM YYYY');

  return (
    <Text>{date}</Text>
  );
}