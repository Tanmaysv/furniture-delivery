import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DROP_DOWN, SORT_BY_ENUM } from "../constants";
import CardComponent from "../shared/components/card-component";
import DropDownComponent from "../shared/components/drop-down-component";
import SearchBarComponent from "../shared/components/search-bar-component";
import { prepareDropDownOptions } from "../shared/utils";
import { ApplicationState } from "../store/application-state";
import FurnitureCardBody from "./components/furniture-card-body";
import HeaderComponent from "./components/header-component";
import { getFurnitureData } from "./redux/actions";
import { FurnitureState } from "./redux/state";
import { FurnitureDataType } from "./redux/type";
import {
  DropDownTitle,
  DropDownWrapper,
  FurnitureCardWrapper,
  FurnitureDataWrapper,
  SearchBarWrapper,
} from "./styles";

const FurnitureDelivery: React.FC = () => {
  const [enteredFurnitureName, setEnteredFurnitureName] = useState<string>("");
  const [updatedFurnitureData, setUpdatedFurnitureData] = useState<
    FurnitureDataType[]
  >([]);
  const [sortBy, setSortBy] = useState<SORT_BY_ENUM>(SORT_BY_ENUM.DEFAULT);
  const dispatch: Dispatch<any> = useDispatch();

  const { furnitureData, isLoading, error } = useSelector<
    ApplicationState,
    FurnitureState
  >((state) => state.furniture);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredFurnitureName(e.target.value);
  };

  const handleDropDownChange = (selectionOption: {
    value: string;
    label: string;
  }) => {
    setSortBy(selectionOption.value as SORT_BY_ENUM);
  };

  useEffect(() => {
    const filteredData: FurnitureDataType[] = enteredFurnitureName
      ? furnitureData.filter((furniture) =>
          furniture.name
            .toLowerCase()
            .includes(enteredFurnitureName.toLowerCase())
        )
      : furnitureData;
    setUpdatedFurnitureData(filteredData);
  }, [furnitureData, enteredFurnitureName]);

  const sortLowToHigh = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.cost > b.cost ? 1 : -1));

  const sortHighToLow = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.cost > b.cost ? -1 : 1));

  const sortRating = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.rating > b.rating ? -1 : 1));

  useEffect(() => {
    let sortedData: FurnitureDataType[] = [];
    if (sortBy === SORT_BY_ENUM.PRICE_LOW_TO_HIGH)
      sortedData = sortLowToHigh(updatedFurnitureData);

    if (sortBy === SORT_BY_ENUM.PRICE_HIGH_TO_LOW)
      sortedData = sortHighToLow(updatedFurnitureData);

    if (sortBy === SORT_BY_ENUM.RATING)
      sortedData = sortRating(updatedFurnitureData);
    sortBy && setUpdatedFurnitureData(sortedData);
  }, [sortBy]);

  useEffect(() => {
    dispatch(getFurnitureData());
  }, []);

  return (
    <>
      <HeaderComponent />
      <SearchBarWrapper>
        <SearchBarComponent
          value={enteredFurnitureName}
          onChange={handleSearchChange}
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
          }}
        />
      </DropDownWrapper>
      <FurnitureDataWrapper>
        {updatedFurnitureData.map((furniture, index) => (
          <FurnitureCardWrapper key={index + furniture.name}>
            <CardComponent body={<FurnitureCardBody furniture={furniture} />} />
          </FurnitureCardWrapper>
        ))}
      </FurnitureDataWrapper>
    </>
  );
};

export default FurnitureDelivery;
