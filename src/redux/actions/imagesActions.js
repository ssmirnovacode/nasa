const types = {
    IMAGES_REQUESTED: 'IMAGES_REQUESTED',
    IMAGES_ERROR: 'IMAGES_ERROR',
    IMAGES_LOADED: 'IMAGES_LOADED',
    SET_IMAGE_TYPE: 'SET_IMAGE_TYPE'
};

export default types;

export const imagesRequested = () => ({
    type: types.IMAGES_REQUESTED
});

export const imagesError = (err) => ({
    type: types.IMAGES_ERROR,
    payload: err
});

export const imagesLoaded = (arr) => ({
    type: types.IMAGES_LOADED,
    payload: arr
});

export const setImageType = (type) => ({
    type: types.SET_IMAGE_TYPE,
    payload: type
});