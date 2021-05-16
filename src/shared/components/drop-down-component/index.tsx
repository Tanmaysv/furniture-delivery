import React from "react";
import Select from "react-select";

type Props = {
  placeholder?: string;
  options: { value: string; label: string }[];
  onChange: (selectedOption: any) => void;
  isMulti?: boolean;
  customStyles?: any;
};

const DropDownComponent: React.FC<Props> = ({
  placeholder,
  options,
  onChange,
  isMulti = false,
  customStyles,
}: Props) => {
  return (
    <>
      <Select
        options={options}
        onChange={onChange}
        styles={customStyles}
        isMulti={isMulti}
        placeholder={placeholder}
      />
    </>
  );
};

export default DropDownComponent;
