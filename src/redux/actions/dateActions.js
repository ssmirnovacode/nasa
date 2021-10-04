const types = {
    SET_DATE: 'SET_DATE',
    DATE_REQUESTED: 'DATE_REQUESTED'
};

export default types;

export const dateRequested = () => ({
    type: types.DATE_REQUESTED
});

export const setDate = (date) => ({
    type: types.SET_DATE,
    payload: date
});