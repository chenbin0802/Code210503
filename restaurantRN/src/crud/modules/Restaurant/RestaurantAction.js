// base action
import ActionsBase from "crud/ActionsBase";

// Utils
import { makeActionType } from 'crud/utils/CrudUtils'

/**
 * Actions for Restaurant
 */
export default class RestaurantAction extends ActionsBase {
  constructor(key){
    super(key)
    this.fetchRestaurants.type = makeActionType(key, 'FETCH_RESTAURANTS')
  }

  // fetch restarunta data by postal code
  fetchRestaurants = (postalCode) => {
    return {
      type: this.fetchRestaurants.type,
      postalCode,
    }
  }

}
