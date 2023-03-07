import styled from "styled-components";
import { motion } from "framer-motion";

export const AuthText = styled(motion.p)`
  text-align: center;
  font-weight: ${p => p.weight};
  margin: 0 0 ${p => p.margin} 0 ;
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
`;