import { Action } from "../action";
import { SpecialOffersBannerItem } from "../../models/specialOffersBannerItem";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { State } from "../stores/specialOffers";

export const FETCH_SPECIAL_OFFERS = "FETCH_SPECIAL_OFFERS";

export type FetchSpecialOffersAction = Action<
  typeof FETCH_SPECIAL_OFFERS,
  { items: SpecialOffersBannerItem[] }
>;

export type SpecialOffersAction = FetchSpecialOffersAction;

export const fetchSpecialOffers = () => {
  return async (
    dispatch: ThunkDispatch<State, null, FetchSpecialOffersAction>
  ) => {
    const response = await fetch(
      "https://createx-f0a27-default-rtdb.europe-west1.firebasedatabase.app/specialOffersBanners.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch special offers");
    }

    const data = await response.json();
    const items = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });

    dispatch({
      type: FETCH_SPECIAL_OFFERS,
      payload: {
        items,
      },
    });
  };
};
