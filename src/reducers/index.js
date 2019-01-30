import { combineReducers } from "redux";
import NavReducer from "./navReducer";
import hackerNews from "./hackerNews";

const rootReducer = combineReducers({
  nav: NavReducer,
  data: hackerNews
});

export default rootReducer;
