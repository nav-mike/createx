import { initialState, State } from "../stores/specialOffers";
import {
  FETCH_SPECIAL_OFFERS,
  SpecialOffersAction,
} from "../actions/specialOffers";

const specialOffersReducer = (
  state: State = initialState,
  action: SpecialOffersAction
) => {
  switch (action.type) {
    case FETCH_SPECIAL_OFFERS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default specialOffersReducer;
