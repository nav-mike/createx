import { SpecialOffersBannerItem } from "../../models/specialOffersBannerItem";

export type State = {
  items: SpecialOffersBannerItem[];
};

export const initialState: State = {
  items: [],
};
