import styled from "styled-components";
import { dateFormatter } from "helpers/dateFormatter";
import { Link } from "react-router-dom";
import { Badge } from "components/Badge/Badge";

const Label = styled.td`
  text-align: center;
`;

const CustomTable = styled.table`
  width: 100%;
`;

const Header = styled.thead`
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.complementary.grey};
  th {
    padding: 0 0 ${p => p.theme.spaces.xxs} 0;
  }
  tr {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      height: 1.2px;
      width: 100%;
      background-color: ${p => p.theme.colors.grayScale.gray20};
    }
  }
`;

const Body = styled.tbody`
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 12px;
  color: ${p => p.theme.colors.grayScale.gray50};
  td {
    min-width: 70px;
    padding: 10px 3px;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      min-width: 100px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: ${p => p.theme.fontSize.s};
  }
`;

const Title = styled(Link)`
  text-decoration: underline;
  color: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const TasksTable = ({ items }) => {
  const columns = ["Status", "Title", "Publish"];

  return (
    <CustomTable>
      <Header>
        <tr>
          {columns.map((column) => (<th key={column}>{column}</th>))}
        </tr>
      </Header>
      <Body>
        {items.length === 0
          ? <tr><td></td><Label>You dont have task with such title</Label><td></td></tr>
          : <>
            { items.map((item) => (
              <tr key={item._id}>
                <td><Badge status={item.status} /></td>
                <td><Title to={`/homepage/task/${item._id}`}>{item.title}</Title></td>
                <td style={{ textAlign: 'center' }}>{dateFormatter(item.updatedAt)}</td>
              </tr>
            ))}
          </>
         }
      </Body>     
      </CustomTable>
  );
};