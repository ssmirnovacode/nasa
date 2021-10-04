import roverActionsTypes from '../actions/roverActions';

const roverReducer = (state = {
    name: 'Curiosity',
    launched: '2011-11-26',
    landed: '2012-08-06',
    lastUpdate: '2021-10-01',
    status: 'active'
}, action) => {
    switch(action.type) {
        case roverActionsTypes.SET_ROVER:
            return {
                ...state,
                name: action.payload
            }

        case roverActionsTypes.SET_ROVER_DATA:
            return {
                ...state,
                launched: action.payload.launch_date,
                landed: action.payload.landing_date,
                lastUpdate: action.payload.max_date,
                status: action.payload.status
            }
        default:
            return state
    }
};
export default roverReducer;