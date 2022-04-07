import { Action } from "../action";
import { Product } from "../../models/product";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { State } from "../stores/newArrivals";

export const FETCH_NEW_ARRIVALS = "FETCH_NEW_ARRIVALS";

export type FetchNewArrivalsAction = Action<
  typeof FETCH_NEW_ARRIVALS,
  { items: Product[] }
>;

export type NewArrivalsActions = FetchNewArrivalsAction;

export const fetchNewArrivals = () => {
  return async (
    dispatch: ThunkDispatch<State, null, FetchNewArrivalsAction>
  ) => {
    const response = await fetch(
      "https://createx-f0a27-default-rtdb.europe-west1.firebasedatabase.app/newArrivals.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch new arrivals");
    }

    const data = await response.json();
    const items = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });

    items.push(...items);
    items.push(...items);

    dispatch({
      type: FETCH_NEW_ARRIVALS,
      payload: {
        items,
      },
    });
  };
};
