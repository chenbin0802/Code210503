import { combineReducers } from "redux-immutable";
// import all the reducers 
import restaurantReducer from "../screens/Home/reducers";

// combine all the reducers 
export default (rootReducer = combineReducers({
  restaurants: restaurantReducer
}));
