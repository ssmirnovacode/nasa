const roverReducer = (state = {
    name: 'Curiosity',
    launched: null,
    landed: null,
    lastUpdate: null,
    status: null
}, action) => {
    switch(action.type) {
        case 'SET_ROVER':
            return {
                ...state,
                name: action.payload
            }

        case 'SET_ROVER_DATA':
            return {
                ...state,
                launched: action.payload.launch_date,
                landed: action.payload.landing_date,
                lastUpdate: action.payload.max_date,
                status: action.payload.status
                /* data: {
                    launched: action.payload.launch_date,
                    landed: action.payload.landing_date,
                    lastUpdate: action.payload.max_date,
                    status: action.payload.status
                } */
            }
        default:
            return state
    }
};
export default roverReducer;