const imagesReducer = (state = {
                                images: [],
                                loading: false,
                                error: null
                            }, action) => {
    switch (action.type) {
        case 'IMAGES_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'IMAGES_LOADED':
                return {
                    ...state,
                    images: action.payload,
                    loading: false
                }
        case 'IMAGES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }   
}

export default imagesReducer;