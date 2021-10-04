import dateActionTypes from '../actions/dateActions';

const dateReducer = (state='', action) => {
    switch(action.type) {
        case dateActionTypes.SET_DATE: 
            return action.payload;
        default:
            return state;
    }
};

export default dateReducer;