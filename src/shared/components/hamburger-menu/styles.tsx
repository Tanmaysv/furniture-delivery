import styled from "styled-components";

export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HamburgerMenuIconContainer = styled.span`
  display: none;
  flex-direction: column;
  margin-right: 1rem;
  cursor: pointer;
`;

export const HamburgerMenuIcon = styled.i`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 2rem;
  height: 0.25rem;
  margin: 0.25rem;
  border-radius: 0.125rem;
`;
