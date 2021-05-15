import { ApplicationState } from "./application-state";
import furnitureReducer from "../furniture-delivery/redux/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers<ApplicationState>({
  furniture: furnitureReducer,
});

export default rootReducer;
