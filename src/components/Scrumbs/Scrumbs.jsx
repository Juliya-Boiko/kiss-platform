import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { nameCapitalize } from "helpers/nameCapitalize";

const Text = styled.p`
  margin: 0 0 ${p => p.theme.spaces.s} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grayScale.gray20};
`;

export const Scrumbs = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[2] || '';

  return (
    <Text>{nameCapitalize(path)}</Text>
  );
};