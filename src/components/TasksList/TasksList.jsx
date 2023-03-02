import styled from "styled-components";
import { dateFormatter } from "helpers/dateFormatter";
const List = styled.ul`
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  p {
    font-weight: 400;
font-size: 12px;
    background-color: teal;
  }
`;

export const TasksList = ({ items }) => {
  //const data = [{_id: 'header', status: 'Status', title: 'Title', updatedAt: 'Publish Date'}, ...items];
  console.log(items);
  // console.log(dateFormatter('2023-03-01T14:49:00.014Z'));

  return (
    <List>
      {items && items.map(item => {
        return <Item key={item._id}>
          <p>{item.status}</p>
          <p>{item.title}</p>
          <p>{dateFormatter(item.updatedAt)}</p>
        </Item>
      })}
    </List>
  );
};