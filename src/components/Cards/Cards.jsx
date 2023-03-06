import styled from "styled-components";
import { motion } from "framer-motion";
import { cardFormatter } from "helpers";

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

const Card = styled(motion.li)`
  width: calc(100% / 2 - 10px);
  display: flex;
  align-items: baseline;
  padding: ${p => p.theme.spaces.xxs};
  margin: 5px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 11px;
  color: ${p => p.theme.colors.grayScale.gray50};
  border: 0.684874px solid ${p => p.theme.colors.grayScale.gray5};
  box-shadow: ${p => p.theme.boxShadow.s};
  span {
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: 28px;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      font-size: ${p => p.theme.fontSize.l};
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: calc(100% / 4 - 20px);
    font-size: ${p => p.theme.fontSize.xs};
  }
`;

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 15px 0 0;
  padding: 13px;
  border-radius: ${p => p.theme.borderRadius.s};
  color: ${p => p.theme.colors.brand.white};
  background-color: ${p => p.color};
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 58px;
    height: 58px;
  }
`;

export const Cards = ({ items }) => {
  const data = cardFormatter(items);

  return (
    <Container>
      <List>
        {data.map((item, idx) => {
          return <Card
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: (idx / 2),
              ease: [0.5, 0.71, 1, 1],
            }}
            key={item.title}
          >
            <Wrapper color={item.color}>{item.icon}</Wrapper>
            <p><span>{item.amount}</span> in {item.title} </p>
          </Card>
        })}
      </List>
    </Container>
  );
};