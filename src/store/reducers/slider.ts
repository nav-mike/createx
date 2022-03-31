import { initialState, State } from "../stores/slider";
import { FETCH_SLIDER_DATA, SliderAction } from "../actions/slider";

const sliderReducer = (state: State = initialState, action: SliderAction) => {
  switch (action.type) {
    case FETCH_SLIDER_DATA:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default sliderReducer;
