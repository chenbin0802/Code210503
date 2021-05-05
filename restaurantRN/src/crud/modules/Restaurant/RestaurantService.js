import { fromJS } from "immutable";

import { fork, put, takeLatest } from 'redux-saga/effects'
import RestaurantAction from './RestaurantAction'
import RestaurantSelector from './RestaurantSelector'
import SeriveBase from '../../ServiceBase'
class RestaurantService extends SeriveBase {
  constructor(key, actionClass, selectorClass){
    super(key, actionClass, selectorClass)
  }

  getInitialState () {
    return fromJS({
      restaurants: [],
      isLoading: false,
    })
  }

  getApiPath(){
    return '/restaurants/'
  }

 reducer(state, action) {
    state = super.reducer(state, action)
    switch (action.type) {
      case this.actions.fetch.type.typeSuccess:
        return state.set("restaurants", action.result).set("isLoading", false)
      case this.actions.fetch.type.typeWorking:
        return state.set("isLoading", true)
      case this.actions.fetch.type.typeFailure:
        return state.set("isLoading", false)
      default:
        return state;
    }
  }

  *sagaMain () {
    yield call([this, super.sagaMain])
    yield fork([this, this.watchFetchRestaurant])
  }

  *watchFetchRestaurant () {
    yield takeLatest(this.actions.fetchRestaurants.type, this.fetchRestaurants);
  }

  *fetchRestaurants(payload) {
    const queryParams = payload
    yield put(this.actions.fetch(queryParams)) //bypostcode/{postalcode}
  }
}

export default restaurantService = new RestaurantService('Restaurant',RestaurantAction,RestaurantSelector)