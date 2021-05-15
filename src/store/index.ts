import { applyMiddleware, compose, createStore } from "redux";
import { ApplicationState, initalApplicationState } from "./application-state";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: ApplicationState) => {
  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore(initalApplicationState);

export default store;
