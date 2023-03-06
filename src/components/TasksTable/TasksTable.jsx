import styled from "styled-components";
import { motion } from "framer-motion";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

const Label = styled.td`
  text-align: center;
`;

const CustomTable = styled(motion.table)`
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

export const TasksTable = ({ items, sortHandler }) => {
  const columns = ["Status", "Title", "Publish"];

  return (
    <CustomTable
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 2,
        ease: [0.5, 0.71, 1, 1],
      }}
    >
      <Header>
        <tr>
          {columns.map((column) => (
            <TableHead  key={column} column={column} onClick={() => sortHandler(column)} />
          ))}
        </tr>
      </Header>
      <Body>
        {items.length === 0
          ? <tr><td></td><Label>NO DATA</Label><td></td></tr>
          : <>
            { items.map((item, idx) => (
              <TableRow key={item._id} item={item} idx={idx} />
            ))}
          </>
         }
      </Body>     
      </CustomTable>
  );
};