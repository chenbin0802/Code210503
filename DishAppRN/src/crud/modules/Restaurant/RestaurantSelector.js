// Base Selector
import SelectorBase from "crud/SelectorsBase";

// reselect
import { createSelector } from "reselect";

/**
 * Selector for Restaurant
 */
export default class RestaurantSelector extends SelectorBase {
  // Get Restaurants data
   getRestaurants = createSelector(
      this.getModuleState,
      state => {
        return state
      }
    )
  
    // get a Restaurant data by id
   getRestaurantById = (Id) =>
      createSelector(
        this.getModuleState,
        (state) => {
          return state?.Restaurants?.find(restaurant=>restaurant.Id === Id)
        }
      )
}