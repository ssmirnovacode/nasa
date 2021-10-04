import roverActionTypes from '../actions/roverImagesActions';

const roverImagesReducer = (state = {
                                    images: [],
                                    loading: false,
                                    error: null
                                }, action) => {
    switch (action.type) {
        case roverActionTypes.ROVER_IMAGES_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false
        }
        case roverActionTypes.ROVER_IMAGES_LOADED:
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        case roverActionTypes.ROVER_IMAGES_ERROR:
            return {
            ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }   
}

export default roverImagesReducer;