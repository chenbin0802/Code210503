import { all } from "redux-saga/effects";
// import all the sagas
import loadRestaurantsSaga from "../screens/Home/saga";

// combine all sagas in a root saga
export function* rootSaga() {
  yield all([loadRestaurantsSaga()]);
}
