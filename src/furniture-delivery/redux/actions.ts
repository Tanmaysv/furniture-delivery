import { Dispatch } from "redux";
import { ActionType, createAsyncAction } from "typesafe-actions";
import {
  FETCH_FURNITURE_DATA_CANCEL,
  FETCH_FURNITURE_DATA_FAILURE,
  FETCH_FURNITURE_DATA_REQUEST,
  FETCH_FURNITURE_DATA_SUCCESS,
} from "./constants";
import { FurnitureMockData } from "./mock-data";
import { FurnitureDataType } from "./type";

export const fetchFurnitureData = createAsyncAction(
  FETCH_FURNITURE_DATA_REQUEST,
  FETCH_FURNITURE_DATA_SUCCESS,
  FETCH_FURNITURE_DATA_FAILURE,
  FETCH_FURNITURE_DATA_CANCEL
)<void, FurnitureDataType[], string, void>();

export const getFurnitureData = () => {
  return async (dispatch: Dispatch) => {
    try {
      console.log("inside action");
      dispatch(fetchFurnitureData.request());
      // We can add actual api call over here
      dispatch(fetchFurnitureData.success(FurnitureMockData));
    } catch (e) {
      dispatch(
        fetchFurnitureData.failure(
          "Failed to fetch furnitures. Please try again later"
        )
      );
    }
  };
};

export type FurnitureActions = ActionType<typeof fetchFurnitureData>;
