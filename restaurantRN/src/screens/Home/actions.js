import { FETCH_RESTAURNATS } from "./constants";

export function fetchRestaurants(postalCode) {
  return {
    type: FETCH_RESTAURNATS,
    payload: postalCode,
  };
}
