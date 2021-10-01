import { combineReducers } from "redux";
import dateReducer from "./reducers/dateReducer";
import imagesReducer from './reducers/imagesReducer';
import roverImagesReducer from './reducers/roverImagesReducer';
import roverReducer from "./reducers/roverReducer";

const reducer = combineReducers({
    date: dateReducer,
    images: imagesReducer,
    roverImages: roverImagesReducer,
    rover: roverReducer
});

export default reducer;