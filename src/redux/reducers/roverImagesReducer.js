const roverImagesReducer = (state = {
                                    images: [],
                                    loading: false,
                                    error: null
                                }, action) => {
    switch (action.type) {
        case 'ROVER_IMAGES_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
        }
        case 'ROVER_IMAGES_LOADED':
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        case 'ROVER_IMAGES_ERROR':
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