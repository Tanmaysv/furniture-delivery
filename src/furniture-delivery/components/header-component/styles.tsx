import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  background-color: #fe4066;
  height: 4rem;
  padding-top: 1rem;
  width: 100%;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  width: 61.875rem;
  @media only screen and (max-width: 1000px) {
    width: 41.6rem;
  }
  @media only screen and (max-width: 680px) {
    width: 21rem;
  }
`;

export const HeaderTitle = styled.span`
  /* margin-left: 9.5rem; */
  font-size: 1.5rem;
  color: white;
`;

export const HeaderUl = styled.ul`
  display: inline;
  list-style-type: none;
  text-align: end;
  margin: 0;
  float: right;
  margin-top: 0.5rem;
  padding: 0;
`;

export const HeaderLi = styled.li`
  display: inline;
  color: white;
  /* margin: 1rem; */
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
