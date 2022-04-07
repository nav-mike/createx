import { initialState, State } from "../stores/newArrivals";
import { FETCH_NEW_ARRIVALS, NewArrivalsActions } from "../actions/newArrivals";

const newArrivalsReducer = (
  state: State = initialState,
  action: NewArrivalsActions
) => {
  switch (action.type) {
    case FETCH_NEW_ARRIVALS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default newArrivalsReducer;
