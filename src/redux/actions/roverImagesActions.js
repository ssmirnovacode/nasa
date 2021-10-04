const types = {
    ROVER_IMAGES_REQUESTED: 'ROVER_IMAGES_REQUESTED',
    ROVER_IMAGES_ERROR: 'ROVER_IMAGES_ERROR',
    ROVER_IMAGES_LOADED: 'ROVER_IMAGES_LOADED'
};

export default types;

export const roverImagesRequested = () => ({
    type: types.ROVER_IMAGES_REQUESTED
});

export const roverImagesError = (err) => ({
    type: types.ROVER_IMAGES_ERROR,
    payload: err
});

export const roverImagesLoaded = (arr) => ({
    type: types.ROVER_IMAGES_LOADED,
    payload: arr
});