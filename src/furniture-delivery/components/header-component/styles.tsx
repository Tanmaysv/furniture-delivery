import styled from "styled-components";
import { HamburgerMenuIconContainer } from "../../../shared/components/hamburger-menu/styles";

export const HeaderWrapper = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  height: 4rem;
  padding-top: 1rem;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 61.875rem;
  @media only screen and (max-width: 1000px) {
    width: 41.6rem;
  }
  @media only screen and (max-width: 680px) {
    width: 21rem;
    ${HamburgerMenuIconContainer} {
      display: flex;
    }
  }
`;

export const SiteLogoWrapper = styled.div`
  svg {
    height: 60px;
    transform: translate(-10px, -7px);
    fill: ${({ theme }) => theme.backgroundColor};
  }
`;

export const HeaderTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderUl = styled.ul`
  display: inline;
  list-style-type: none;
  text-align: end;
  margin: 0;
  margin-left: auto;
  margin-top: 0.5rem;
  padding: 0;
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

export const HeaderLi = styled.li`
  display: inline;
  color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
