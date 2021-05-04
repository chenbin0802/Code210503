import { createSelector } from "reselect";

const selectRestaurants = state => state.get("restaurants");
const getRestaurants = () =>
  createSelector(
    selectRestaurants,
    state => state.toJS()
  );

const getRestaurantById = (Id) =>
    createSelector(
      selectRestaurants,
      state => {
        return state.toJS().restaurants?.Restaurants?.find(restaurant=>restaurant.Id === Id)
      }
    )
export { getRestaurants, getRestaurantById };
