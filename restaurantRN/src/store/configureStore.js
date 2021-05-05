// redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

// all services
import { services } from 'store/Services'

const sagaMiddleware = createSagaMiddleware()

// Configure Store
export default function configureStore () {
  // setup
  const sagas = []
  const reducers = {}
  for (const service of services) {
    
    // add all sagas
    if (service.sagaMain) {
      sagas.push([service, service.sagaMain])
    }

    // add al reducers
    if (service.reducer) {
      reducers[service.storeKey] = service.reducer
    }
  }

  const reducer = combineReducers(reducers)
  const store = createStore(reducer, applyMiddleware(sagaMiddleware))

  // combine all sagas in a root saga
  function * rootSaga () {
    for (const saga of sagas) {
      yield fork(saga)
    }
  }
  sagaMiddleware.run(rootSaga)
  return store
}
