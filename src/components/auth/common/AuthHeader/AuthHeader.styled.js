import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthHeaderNav = styled.p`
  margin: 0 0 ${p => p.theme.spaces.s} 0 ;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.grayScale.gray30};
`;

export const AuthHeaderLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.brand.green};
`;

export const AuthHeaderText = styled.p`
  margin: 0 0 ${p => p.theme.spaces.xs} 0 ;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.grayScale.gray30};
`;