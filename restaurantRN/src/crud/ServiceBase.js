/* eslint-disable new-cap */
// saga
import { put, fork, takeLatest } from 'redux-saga/effects'

// Constants
import { API_BASE } from 'Constants'

// Utils
import axios from 'axios'

/**
 * Basic Service of all services
 * basic interface:
 * reducer
 * saga function
 * actions
 * selectors
 */
export default class SeriveBase {
  constructor (storeKey, actionClass, selectorClass) {
    this.storeKey = storeKey
    this.actions = new actionClass(storeKey)
    this.selectors = new selectorClass(storeKey)

    this.reducer = this.reducer.bind(this)
  }

  // init state
  getInitialState () {
    throw new Error('Override getInitialState')
  }

  // saga main function
  * sagaMain () {
    yield fork([this, this.watchFetch])
  }

  // module API path
  getApiPath () {
    throw new Error('Override getApiPath and return string')
  }

  // watch fetch action
  * watchFetch () {
    yield takeLatest(this.actions.fetch.type, [this, this.fetch])
  }

  // Get info from API TODO: Move this function to another service
  * fetch ({
    payload
  }) {
    yield put({ type: this.actions.fetch.typeWorking })
    try {
      const result = yield axios(`${API_BASE}${this.getApiPath()}${payload}`)
      if (result.status === 200) {
        const data = result.data
        yield put({ type: this.actions.fetch.typeSuccess, data })
      } else {
        yield put({ type: this.actions.fetch.typeFailure, err })
      }
    } catch (err) {
      yield put({ type: this.actions.fetch.typeFailure, err })
    }
  }

  // default reducer, when Success of failure, update state
  reducer (state = this.getInitialState(), action) {
    switch (action.type) {
      case this.actions.fetch.typeSuccess:
      case this.actions.fetch.typeFailure:
        return {
          ...state,
          ...action.data
        }
    }
    return state
  }
}
