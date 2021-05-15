import { initialFurnitureState } from "../furniture-delivery/redux/state";

export const initalApplicationState = {
  furniture: initialFurnitureState,
};

export type ApplicationState = typeof initalApplicationState;
