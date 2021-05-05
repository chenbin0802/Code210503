/* eslint-disable new-cap */
import { put, fork, takeLatest } from 'redux-saga/effects'
import { API_BASE } from 'Constants'
import axios from 'axios'

export default class SeriveBase {
  constructor (storeKey, actionClass, selectorClass) {
    this.storeKey = storeKey
    this.actions = new actionClass(storeKey)
    this.selectors = new selectorClass(storeKey)

    this.reducer = this.reducer.bind(this)
  }

  getInitialState () {
    throw new Error('Override getInitialState')
  }

  * sagaMain () {
    yield fork([this, this.watchFetch])
  }

  getApiPath () {
    throw new Error('Override getApiPath and return string')
  }

  * watchFetch () {
    yield takeLatest(this.actions.fetch.type, [this, this.fetch])
  }

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
