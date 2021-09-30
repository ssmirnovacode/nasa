import { combineReducers } from "redux";
import dateReducer from "./reducers/dateReducer";

const reducer = combineReducers({
    date: dateReducer
});

export default reducer;