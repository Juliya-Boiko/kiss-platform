import styled from "styled-components";
import { motion } from "framer-motion";
import { dateFormatter } from "helpers";
import { Link } from "react-router-dom";
import { Badge } from "components/Badge/Badge";

const Title = styled(Link)`
  text-decoration: underline;
  color: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const TableRow = ({ item, idx }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: ( 2 + idx / 10),
        ease: [0.5, 0.71, 1, 1],
      }}
    >
      <td><Badge status={item.status} /></td>
      <td><Title to={`/homepage/task/${item._id}`}>{item.title}</Title></td>
      <td style={{ textAlign: 'center' }}>{dateFormatter(item.updatedAt)}</td>
    </motion.tr>
  );
};