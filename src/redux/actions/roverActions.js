const types = {
    SET_ROVER: 'SET_ROVER',
    REQUEST_ROVER_DATA: 'REQUEST_ROVER_DATA',
    SET_ROVER_DATA: 'SET_ROVER_DATA',
    SELECT_ROVER_DATE: 'SELECT_ROVER_DATE'
};

export default types;

export const setRover = (roverName) => ({
    type: types.SET_ROVER,
    payload: roverName
});

export const setRoverData = (data) => ({
    type: types.SET_ROVER_DATA,
    payload: data
});

export const requestRoverData = () => ({
    type: types.REQUEST_ROVER_DATA
});

export const selectRoverDate = (date) => ({
    type: types.SELECT_ROVER_DATE,
    payload: date
});