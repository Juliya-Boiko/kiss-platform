import styled from "styled-components";
import { badgeColor } from "helpers/badgeColor";

const Container = styled.span`
  display: block;
  padding: 2px ${p => p.theme.spaces.xxs};
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 8.27586px;
  line-height: 1.8;
  border: 0.689655px solid ${p => p.colors.color};
  border-radius: 2.75862px;
  color: ${p => p.colors.color};
  background-color: ${p => p.colors.bgColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: 12px;
    padding: 5px ${p => p.theme.spaces.xxs};
  }
`;

export const Badge = ({ status }) => {
  return (
    <Container colors={badgeColor(status)}>{status}</Container>
  );
}