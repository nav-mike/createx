import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import sliderReducer from "./reducers/slider";
import newArrivalsReducer from "./reducers/newArrivals";

const rootReducer = combineReducers({
  slider: sliderReducer,
  newArrivals: newArrivalsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
