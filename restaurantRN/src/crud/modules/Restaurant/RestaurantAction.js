import ActionsBase from "crud/ActionsBase";
import { makeActionType } from 'crud/utils/CrudUtils'
export default class RestaurantAction extends ActionsBase {
  constructor(key){
    super(key)
    this.fetchRestaurants.type = makeActionType(key, 'FETCH_RESTAURANTS')
  }

  fetchRestaurants = (postalCode) => {
    return {
      type: this.fetchRestaurants.type,
      postalCode,
    }
  }

}
