const types = {
    SET_ROVER: 'SET_ROVER',
    SET_ROVER_DATA: 'SET_ROVER_DATA'
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