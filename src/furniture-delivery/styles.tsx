import styled from "styled-components";

export const FurnitureDataWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: auto;
  }
  justify-content: center;
`;

export const SearchBarWrapper = styled.div`
  width: 61.875rem;
  margin: 1rem auto;
  @media only screen and (max-width: 1000px) {
    width: 41.6rem;
  }
  @media only screen and (max-width: 680px) {
    width: 21rem;
  }
`;

export const DropDownWrapper = styled.div`
  width: 61.875rem;
  margin: 1rem auto;
  @media only screen and (max-width: 1000px) {
    width: 41.6rem;
  }
  @media only screen and (max-width: 680px) {
    width: 21rem;
  }
`;

export const DropDownTitle = styled.div`
  margin-left: auto;
  width: 35%;
`;
