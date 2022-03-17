import { Action } from "../action";
import { SliderItem } from "../../models/sliderItem";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { State } from "../stores/slider";

export const FETCH_SLIDER_DATA = "FETCH_SLIDER_DATA";

export type FetchSliderDataAction = Action<
  typeof FETCH_SLIDER_DATA,
  { items: SliderItem[] }
>;

export type SliderAction = FetchSliderDataAction;

export const fetchSliderData = () => {
  return async (
    dispatch: ThunkDispatch<State, null, FetchSliderDataAction>
  ) => {
    const response = await fetch(
      "https://createx-f0a27-default-rtdb.europe-west1.firebasedatabase.app/sliderItems.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch slider data");
    }

    const data = await response.json();
    console.log(
      Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      })
    );
    dispatch({
      type: FETCH_SLIDER_DATA,
      payload: {
        items: [],
      },
    });
  };
};
