import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_BY_ENUM } from "../../constants";
import { ApplicationState } from "../../store/application-state";
import { getFurnitureData } from "../redux/actions";
import { FurnitureState } from "../redux/state";
import { FurnitureDataType } from "../redux/type";

const useFurnitureData = () => {
  const [enteredFurnitureName, setEnteredFurnitureName] = useState<string[]>(
    []
  );
  const [updatedFurnitureData, setUpdatedFurnitureData] = useState<
    FurnitureDataType[]
  >([]);
  const [sortBy, setSortBy] = useState<SORT_BY_ENUM>(SORT_BY_ENUM.DEFAULT);
  const dispatch: Dispatch<any> = useDispatch();

  const { furnitureData, isLoading } = useSelector<
    ApplicationState,
    FurnitureState
  >((state) => state.furniture);

  const handleSearchChange = (
    selectedOption: {
      value: string;
      label: string;
    }[]
  ) => {
    const selectedValues = selectedOption.map((option) => option.value);
    setEnteredFurnitureName(selectedValues);
  };

  const handleDropDownChange = (selectionOption: {
    value: string;
    label: string;
  }) => {
    setSortBy(selectionOption.value as SORT_BY_ENUM);
  };

  const filterFurnitureData = () => {
    const filteredData: FurnitureDataType[] =
      enteredFurnitureName.length > 0
        ? furnitureData.filter((furniture) =>
            enteredFurnitureName.includes(furniture.name)
          )
        : furnitureData;
    return filteredData;
  };

  const sortLowToHigh = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.cost > b.cost ? 1 : -1));

  const sortHighToLow = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.cost > b.cost ? -1 : 1));

  const sortRating = (data: FurnitureDataType[]): FurnitureDataType[] =>
    [...data].sort((a, b) => (a.rating > b.rating ? -1 : 1));

  const sortFurnitureData = (data: FurnitureDataType[]) => {
    let sortedData: FurnitureDataType[] = data;
    if (sortBy === SORT_BY_ENUM.PRICE_LOW_TO_HIGH)
      sortedData = sortLowToHigh(data);

    if (sortBy === SORT_BY_ENUM.PRICE_HIGH_TO_LOW)
      sortedData = sortHighToLow(data);

    if (sortBy === SORT_BY_ENUM.RATING) sortedData = sortRating(data);
    console.log("sorted data:", sortedData);
    return sortedData;
  };

  useEffect(() => {
    const filtered = filterFurnitureData();
    const filteredAndSorted = sortFurnitureData(filtered);
    setUpdatedFurnitureData(filteredAndSorted);
  }, [enteredFurnitureName, sortBy, filterFurnitureData, sortFurnitureData]);

  useEffect(() => {
    setUpdatedFurnitureData(furnitureData);
  }, [furnitureData]);

  useEffect(() => {
    dispatch(getFurnitureData());
  }, [dispatch]);

  return {
    isLoading,
    furnitureData,
    updatedFurnitureData,
    handleSearchChange,
    handleDropDownChange,
  };
};

export default useFurnitureData;
