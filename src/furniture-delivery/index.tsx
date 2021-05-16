import React from "react";
import { DROP_DOWN, SEARCH_BAR } from "../constants";
import CardComponent from "../shared/components/card-component";
import DropDownComponent from "../shared/components/drop-down-component";
import LoadingIcon from "../shared/components/loading-icon";
import SearchBarComponent from "../shared/components/search-bar-component";
import { prepareDropDownOptions } from "../shared/utils";
import FurnitureCardBody from "./components/furniture-card-body";
import HeaderComponent from "./components/header-component";
import useFurnitureData from "./custom-hook/use-furniture-data";
import {
  DropDownTitle,
  DropDownWrapper,
  FurnitureDataWrapper,
  SearchBarWrapper,
} from "./styles";

const FurnitureDelivery: React.FC = () => {
  const {
    isLoading,
    furnitureData,
    updatedFurnitureData,
    handleSearchChange,
    handleDropDownChange,
  } = useFurnitureData();

  return (
    <>
      {isLoading && <LoadingIcon />}
      <HeaderComponent />
      <SearchBarWrapper>
        <SearchBarComponent
          placeholder={SEARCH_BAR.PLACEHOLDER}
          options={prepareDropDownOptions(
            furnitureData.map((furniture) => furniture.name)
          )}
          onChange={handleSearchChange}
          customStyles={{
            container: (base: any) => ({
              ...base,
              width: "100%",
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              color: state.isSelected && "#fe4066",
              backgroundColor: state.isFocused && "#F8F8F8 !important",
            }),
            control: (provided: any, state: any) => ({
              ...provided,
              borderColor: state.isFocused ? "#fe4066 !important" : "#dcdcdc",
              boxShadow: state.isFocused && "none",
              borderWidth: "2px",
              paddingLeft: "2rem",
            }),
          }}
        />
      </SearchBarWrapper>
      <DropDownWrapper>
        <DropDownTitle>{DROP_DOWN.title}</DropDownTitle>
        <DropDownComponent
          options={prepareDropDownOptions(DROP_DOWN.OPTIONS)}
          onChange={handleDropDownChange}
          customStyles={{
            container: (base: any) => ({
              ...base,
              width: "35%",
              marginLeft: "auto",
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              color: state.isSelected && "#fe4066",
              backgroundColor: state.isFocused && "#F8F8F8 !important",
            }),
            control: (provided: any, state: any) => ({
              ...provided,
              borderColor: state.isFocused ? "#fe4066 !important" : "#dcdcdc",
              boxShadow: state.isFocused && "none",
              borderWidth: "2px",
            }),
          }}
        />
      </DropDownWrapper>
      <FurnitureDataWrapper>
        {updatedFurnitureData.map((furniture, index) => (
          <CardComponent
            body={<FurnitureCardBody key={index} furniture={furniture} />}
          />
        ))}
      </FurnitureDataWrapper>
    </>
  );
};

export default FurnitureDelivery;
