import styled from "styled-components";
import bgiImg from '../../../../images/auth-bgi.png';
import { NavLink } from "react-router-dom";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const AuthMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

export const AuthAddictional = styled.div`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: ${p => p.theme.colors.brand.green};
    background-image: url(${bgiImg});
    background-size: cover;
    color: ${p => p.theme.colors.brand.white};
  }
`;

export const AuthImg = styled.img`
  margin: 0 0 ${p => p.theme.spaces.m} 0 ;
`; 

export const AuthTitle = styled.p`
  margin: 0 0 ${p => p.theme.spaces.xs} 0 ;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
`;

export const AuthText = styled.p`
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
`;

export const AuthLogo = styled.div`
  margin: 0 0 ${p => p.theme.spaces.m} 0 ;
`;

export const AuthNav = styled.p`
  margin: 0 0 ${p => p.theme.spaces.s} 0 ;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.grayScale.gray30};
`;

export const AuthLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.brand.green};
`;

export const AuthContent = styled.div`
  width: 280px;

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 450px;
  }
`;

