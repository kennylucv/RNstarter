import { combineReducers } from "redux";
import NavReducer from "./navReducer";
import Test from "./testReducer";

const rootReducer = combineReducers({
  nav: NavReducer,
  test: Test
});

export default rootReducer;
