import { FurnitureDataType } from "./type";

export type FurnitureStateType = {
  furnitureData: FurnitureDataType[];
  isLoading: boolean;
  error: string;
};

export const initialFurnitureState: FurnitureStateType = {
  furnitureData: [],
  isLoading: false,
  error: "",
};

export type FurnitureState = typeof initialFurnitureState;
