const roverReducer = (state = 'Curiosity', action) => {
    switch(action.type) {
        case 'SET_ROVER':
            return action.payload
        default:
            return state
    }
};
export default roverReducer;