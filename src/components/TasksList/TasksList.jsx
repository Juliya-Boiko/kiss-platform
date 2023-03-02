import Table from "rc-table";
import styled from "styled-components";
import { dateFormatter } from "helpers/dateFormatter";
import { Badge } from "components/Badge/Badge";

const CustomTable = styled(Table)`
  table {
    width: 100%;
  }
  thead {
    tr {
      position: relative;
      font-weight: ${p => p.theme.fontWeight.regular};
      font-size: ${p => p.theme.fontSize.xs};
      line-height: 1.5;
      color: ${p => p.theme.colors.complementary.grey};
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
    th {
      padding: 0 0 ${p => p.theme.spaces.xxs} 0;
    }
  }
  tbody {
    td {
      padding: 10px 5px;
      font-weight: ${p => p.theme.fontWeight.regular};
      font-size: 12px;
      color: ${p => p.theme.colors.grayScale.gray50};
      @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
        font-size: ${p => p.theme.fontSize.s};
      }
    }
  }
`;

export const TasksList = ({ items }) => {
  const columns = [
    { title: "Status", dataIndex: "status", key: "status", width: 110, render: (value) => <Badge status={value} /> },
    { title: "Title", dataIndex: "title", key: "title", width: '50%', render: (value) => <p style={{ textDecoration: 'underline', maxWidth: '460px' }}>{value}</p> },
    { title: "Date", dataIndex: "date", key: "date", width: 110, render: (value) => <p style={{ textAlign: 'center' }}>{value}</p>  },
  ];

  const formatted = items.map((item, index) => {
    return {
      status: item.status,
      title: item.title,
      date: dateFormatter(item.updatedAt),
      key: (index + 1).toString()
    }
  });

  return (
    <CustomTable
      columns={columns}
      data={formatted}
      tableLayout="auto"
    />
  );
};