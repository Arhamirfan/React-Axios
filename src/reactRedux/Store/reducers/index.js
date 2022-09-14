import changeNumber from "./IncrementDecrement";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    //all reducers combine here
    //another reducer
});

export default rootReducer;