import React from "react";
import Select from "react-select";

type Props = {
  options: { value: string; label: string }[];
  onChange: (selectedOption: any) => void;
  customStyles: any;
};

const DropDownComponent: React.FC<Props> = ({
  options,
  onChange,
  customStyles,
}: Props) => {
  return (
    <>
      <Select options={options} onChange={onChange} styles={customStyles} />
    </>
  );
};

export default DropDownComponent;
