import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Text = styled.p`
  margin: 0 0 ${p => p.theme.spaces.s} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grayScale.gray20};
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Scrumbs = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[2] || 'homepage';

  return (
    <Text>{path}</Text>
  );
};