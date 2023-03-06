import styled from "styled-components";
import { motion } from "framer-motion";
import { PieChart } from 'react-minimal-pie-chart';
import { chartFormatter } from "helpers/chartFormatter";
import { BiRadioCircle } from "react-icons/bi";


const Container = styled.div`
  padding: ${p => p.theme.spaces.xs} 0 0 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

const Wrapper = styled(motion.div)`
  padding: ${p => p.theme.spaces.s};
  border-radius: ${p => p.theme.spaces.xxs};
  box-shadow: ${p => p.theme.boxShadow.m};
`;

const Label = styled.li`
  display: flex;
  align-items: center;
  padding: 7px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.grayScale.gray50};
  svg {
    margin-right: 7px;
  }
  span {
    margin-left: 5px;
    font-weight: ${p => p.theme.fontWeight.bold};
  }
`;

export const Chart = ({ items }) => {
  const data = chartFormatter(items);

  const total = data.reduce(function (acc, item) {
    return acc + item.value;
  }, 0);

  return (
    <Container>
      <Wrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: [0.5, 0.71, 1, 1],
        }}
      >
        {total
          ? <PieChart
              data={data}
              lineWidth={30}
              style={{ height: '150px' }} 
            />
          : <PieChart data={[{ title: '', value: 1, color: '#858FA6' }]} lineWidth={30} style={{ height: '150px' }}  />
        }
        <ul>
          {data.map(item => {
            return <Label
              key={item.title}
            >
              <BiRadioCircle color={item.color} size={12} />
              {item.title}  <span>{item.value}</span>
            </Label>
          })}
        </ul>
      </Wrapper>
    </Container>
  );
};