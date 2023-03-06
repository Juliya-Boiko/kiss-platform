import styled from "styled-components";
import { cardFormatter } from "helpers";
import { Card } from "./Card";

const Container = styled.div`
  padding: 0 0 ${p => p.theme.spaces.s} 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 0 ${p => p.theme.spaces.m} 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -5px;
`;

export const CardsList = ({ items }) => {
  const data = cardFormatter(items);

  return (
    <Container>
      <List>
        {data.map((item, idx) => {
          return <Card item={item} idx={idx} key={item.title} />
        })}
      </List>
    </Container>
  );
};