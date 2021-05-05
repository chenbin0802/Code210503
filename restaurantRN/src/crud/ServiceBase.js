import { fromJS } from "immutable";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { API_BASE } from '../Constants'

export default class SeriveBase {
  constructor (storeKey,actionClass,selectorClass) {
    this.storeKey = storeKey
    this.actions = new actionClass(storeKey)
    this.selectors = new selectorClass(storeKey)
    console.debug('actions:', this.actions)
    console.debug('selectors:', this.selectors)

    this.reducer = this.reducer.bind(this)
  }

  getInitialState () {
    throw new Error('Override getInitialState')
  }

  *sagaMain () {
    // does nothing specific
    yield fork([this, this.watchFetch])
  }

  getApiPath () {
    throw new Error('Override getApiPath and return string')
  }

  *watchFetch () {
    yield takeLatest(this.actions.fetch.type, this.fetch);
  }

  *fetch(data) {
    const { queryParams } = data
      yield put({ type: this.actions.fetch.typeWorking });
      try{
        const result = yield call(() => axios(`${API_BASE}${this.getApiPath()}${queryParams}`))
        if(result.status === 200){
          yield put({ type: this.actions.fetch.typeSuccess, result });
        }else{
          yield put({ type: this.actions.fetch.typeFailure, err });
        }

      } catch (err){
        yield put({ type: this.actions.fetch.typeFailure, err });
      }

      
  }


  reducer (state = this.getInitialState(), action) {
    switch (action.type) {
      case this.actions.fetch.typeSuccess:
      case this.actions.fetch.typeFailure:
        return state.set(this.storeKey, action.payload)
    }
    return state
  }


}