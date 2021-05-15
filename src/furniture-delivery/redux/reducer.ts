import { ActionType, createReducer, getType } from "typesafe-actions";
import { fetchFurnitureData, FurnitureActions } from "./actions";
import { FurnitureState, initialFurnitureState } from "./state";

export default createReducer<FurnitureState, FurnitureActions>(
  initialFurnitureState,
  {
    [getType(fetchFurnitureData.request)]: (state: FurnitureState) => {
      return {
        ...state,
        furnitureData: [],
        isLoading: true,
        error: "",
      };
    },
    [getType(fetchFurnitureData.success)]: (
      state: FurnitureState,
      action: ActionType<typeof fetchFurnitureData.success>
    ) => {
      return {
        ...state,
        furnitureData: action.payload,
        isLoading: false,
        error: "",
      };
    },
    [getType(fetchFurnitureData.failure)]: (
      state: FurnitureState,
      action: ActionType<typeof fetchFurnitureData.failure>
    ) => {
      return {
        ...state,
        furnitureData: [],
        error: action.payload,
        isLoading: false,
      };
    },
  }
);
