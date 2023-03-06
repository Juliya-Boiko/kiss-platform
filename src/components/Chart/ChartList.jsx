import styled from "styled-components";
import { BiRadioCircle } from "react-icons/bi";

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

export const ChartList = ({ data }) => {
  return (
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
  );
};