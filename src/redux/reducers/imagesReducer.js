import imagesActionTypes from '../actions/imagesActions';

const imagesReducer = (state = {
                                images: [],
                                loading: false,
                                error: null,
                                imageType: 'natural'
                            }, action) => {
    switch (action.type) {
        case imagesActionTypes.IMAGES_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false
            }
        case imagesActionTypes.IMAGES_LOADED:
                return {
                    ...state,
                    images: action.payload,
                    loading: false
                }
        case imagesActionTypes.IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case imagesActionTypes.SET_IMAGE_TYPE:
            return {
                ...state,
                imageType: action.payload
            }
        default:
            return state;
    }   
}

export default imagesReducer;