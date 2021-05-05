
import { fork, put, takeLatest } from 'redux-saga/effects'
import RestaurantAction from 'crud/modules/Restaurant/RestaurantAction'
import RestaurantSelector from 'crud/modules/Restaurant/RestaurantSelector'
import SeriveBase from 'crud/ServiceBase'
class RestaurantService extends SeriveBase {
  getInitialState () {
    return {
      restaurants: [],
      isLoading: false
    }
  }

  getApiPath () {
    return '/restaurants/'
  }

  reducer (state, action) {
    state = super.reducer(state, action)
    switch (action.type) {
      case this.actions.fetch.typeSuccess:
        return {
          ...state,
          isLoading: false
        }
      case this.actions.fetch.type:
        return {
          ...state,
          isLoading: true
        }
      case this.actions.fetch.typeFailure:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state
    }
  }

  * sagaMain () {
    yield fork([this, super.sagaMain])
    yield fork([this, this.watchFetchRestaurant])
  }

  * watchFetchRestaurant () {
    yield takeLatest(this.actions.fetchRestaurants.type, [this, this.fetchRestaurantsByPostalCode])
  }

  * fetchRestaurantsByPostalCode (payload) {
    // https://aus.api.just-eat.io/restaurants/bypostcode/{postcode}
    const queryParam = `bypostcode/${payload.postalCode}`
    yield put(this.actions.fetch(queryParam))
  }
}

export const restaurantService = new RestaurantService('Restaurant', RestaurantAction, RestaurantSelector)
