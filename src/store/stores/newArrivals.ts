import { Product } from "../../models/product";

export type State = {
  items: Product[];
};

export const initialState: State = {
  items: [],
};
