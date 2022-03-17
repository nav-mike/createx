import { SliderItem } from "../../models/sliderItem";

export type State = {
  items: SliderItem[];
};

export const initialState: State = {
  items: [],
};
