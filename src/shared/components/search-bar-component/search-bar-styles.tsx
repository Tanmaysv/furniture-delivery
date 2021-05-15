import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { StyledInput } from "../input-component/input-styles";

export const StyledSearchBar = styled.div`
  position: relative;
`;

export const SvgWrapper = styled(FaSearch)`
  position: absolute;
  width: 4%;
  height: 50%;
  margin: 0.5rem 0.5rem 0.5rem 0.3rem;
  /* margin: 0.5rem; */
  color: ${({ theme }) => theme.lightGrey};
`;

export const InputComponentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  ${StyledInput} {
    padding-left: 2rem;
  }
`;
