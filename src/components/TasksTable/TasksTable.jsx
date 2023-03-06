import styled from "styled-components";
import { motion } from "framer-motion";
import { dateFormatter } from "helpers";
import { Link } from "react-router-dom";
import { Badge } from "components/Badge/Badge";
import { BsArrowDownShort } from "react-icons/bs";

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

const Title = styled(Link)`
  text-decoration: underline;
  color: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

const SortBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg { display: none }
  &:hover { 
    svg { display: block }
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
            <th key={column}>
              <SortBtn
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => sortHandler(column)}
              >
                {column}
                <BsArrowDownShort size="14" />
              </SortBtn>
            </th>))}
        </tr>
      </Header>
      <Body>
        {items.length === 0
          ? <tr><td></td><Label>NO DATA</Label><td></td></tr>
          : <>
            { items.map((item, idx) => (
              <motion.tr
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: ( 2 + idx / 10),
                  ease: [0.5, 0.71, 1, 1],
                }}
                key={item._id}
              >
                <td><Badge status={item.status} /></td>
                <td><Title to={`/homepage/task/${item._id}`}>{item.title}</Title></td>
                <td style={{ textAlign: 'center' }}>{dateFormatter(item.updatedAt)}</td>
              </motion.tr>
            ))}
          </>
         }
      </Body>     
      </CustomTable>
  );
};