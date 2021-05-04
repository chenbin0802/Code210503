import { FETCH_RESTAURNATS, FETCH_RESTAURNATS_SUCCESS, LOADING, FETCH_RESTAURNATS_FAILED } from "./constants";
import { fromJS } from "immutable";

export const initialState = fromJS({
  restaurants: [],
  isLoading: false,
});

function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURNATS:
      return state;
    case FETCH_RESTAURNATS_SUCCESS:
      return state.set("restaurants", action.result).set("isLoading", false)
    case LOADING:
      return state.set("isLoading", true)
    case FETCH_RESTAURNATS_FAILED:
      return state.set("isLoading", false)
    default:
      return state;
  }
}

export default restaurantReducer;
