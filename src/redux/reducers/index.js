import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import { userData } from "./pageReducer";
export default combineReducers({
  pageStore: pageReducer,
 
});
