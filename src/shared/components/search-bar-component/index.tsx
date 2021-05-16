import React from "react";
import DropDownComponent from "../drop-down-component";
import { InputComponentWrapper, StyledSearchBar, SvgWrapper } from "./styles";

type Props = {
  placeholder?: string;
  onChange: (selectedOption: any) => void;
  options: { value: string; label: string }[];
  customStyles: any;
};

const SearchBarComponent: React.FC<Props> = ({
  placeholder,
  onChange,
  options,
  customStyles,
}: Props) => (
  <StyledSearchBar>
    <SvgWrapper />
    <InputComponentWrapper>
      <DropDownComponent
        placeholder={placeholder ?? ""}
        options={options}
        onChange={onChange}
        isMulti={true}
        customStyles={customStyles}
      />
    </InputComponentWrapper>
  </StyledSearchBar>
);

export default SearchBarComponent;
