import styled from "styled-components";

const Text = styled.p`
  font-weight: ${p=> p.theme.fontWeight.bold};
  font-size: ${p=> p.theme.fontSize.xs};
  line-height: 1.8;
  color: ${p => p.theme.colors.grayScale.gray20};
  span {
    color: ${p => p.theme.colors.support.error};
  }
`;

export const TaskError = ({ error }) => {
  return (
    <Text><span>*</span> {error}</Text>
  );
}