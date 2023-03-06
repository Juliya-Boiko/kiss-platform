import styled from "styled-components";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

const SortBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.grayScale.gray50};
  cursor: pointer;
  svg { display: none }
  &:hover { 
    svg { display: block }
   }
`;

export const TableHead = ({ column, onClick }) => {
  return (
    <th>
      <SortBtn
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={() => onClick(column)}
      >
        {column}
        <BsArrowDownShort size="14" />
      </SortBtn>
    </th>
  );
};