import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import sliderReducer from "./reducers/slider";

const rootReducer = combineReducers({
  slider: sliderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
