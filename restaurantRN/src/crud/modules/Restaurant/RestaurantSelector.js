import SelectorBase from "../../SelectorsBase";
import { createSelector } from "reselect";

export default class RestaurantSelector extends SelectorBase {
   getRestaurants = createSelector(
      this.getModuleState,
      state => {
        return state
      }
    )
  
   getRestaurantById = (Id) =>
      createSelector(
        this.getModuleState,
        (state) => {
          return state?.Restaurants?.find(restaurant=>restaurant.Id === Id)
        }
      )
}