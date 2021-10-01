import { combineReducers } from "redux";
import dateReducer from "./reducers/dateReducer";
import imagesReducer from './reducers/imagesReducer';

const reducer = combineReducers({
    date: dateReducer,
    images: imagesReducer
});

export default reducer;