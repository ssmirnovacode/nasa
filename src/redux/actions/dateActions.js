const types = {
    SET_DATE: 'SET_DATE'
};

export default types;

export const setDate = (date) => ({
    type: types.SET_DATE,
    payload: date
});