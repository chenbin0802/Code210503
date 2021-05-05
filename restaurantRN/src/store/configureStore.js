import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { services } from './Services'

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(){

    // setup
    const sagas = []
    const reducers = {}
    for( const service of services){
        if(service.sagaMain){
            sagas.push([service, service.sagaMain])
        }

        if(service.reducer){
            reducers[service.storeKey] = service.reducer
        }
    }

    const reducer = combineReducers(reducers)
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    // combine all sagas in a root saga
    function* rootSaga() {
        yield all(sagas);
    }
    sagaMiddleware.run(rootSaga);
    return store;
}