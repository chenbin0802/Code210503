import SelectorBase from "../../SelectorsBase";
import { createSelector } from "reselect";

export default class RestaurantSelector extends SelectorBase {
   getRestaurants = () =>
    createSelector(
      this.getModuleState,
      state => state.toJS()
    );
  
   getRestaurantById = (Id) =>
      createSelector(
        this.getModuleState,
        state => {
          return state.toJS().Restaurants?.find(restaurant=>restaurant.Id === Id)
        }
      )
}