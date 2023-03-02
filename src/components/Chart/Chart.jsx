import styled from "styled-components";
import { PieChart } from 'react-minimal-pie-chart';
import { chartFormatter } from "helpers/chartFormatter";
import { BiRadioCircle } from "react-icons/bi";


const Container = styled.div`
  padding: ${p => p.theme.spaces.xs} 0 0 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  padding: ${p => p.theme.spaces.s};
  border-radius: ${p => p.theme.spaces.xxs};
  box-shadow: ${p => p.theme.boxShadow.m};
`;

const Label = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.grayScale.gray50};
  svg {
    margin-right: 7px;
  }
  span {
    font-weight: ${p => p.theme.fontWeight.bold};
  }
`;

export const Chart = ({ items }) => {
  const data = chartFormatter(items);

  return (
    <Container>
      <Wrapper>
        <PieChart
          data={data}
          lineWidth={30}
          style={{ height: '100px' }} 
        />
        <ul>
          {data.map(item => {
            return <Label
              key={item.title}
            >
              <BiRadioCircle color={item.color} size={12} />
              {item.title} <span>{item.value}</span>
            </Label>
          })}
        </ul>
      </Wrapper>
    </Container>
  );
};