export const roverImagesRequested = () => ({
    type: 'ROVER_IMAGES_REQUESTED'
});

export const roverImagesError = (err) => ({
    type: 'ROVER_IMAGES_ERROR',
    payload: err
});

export const roverImagesLoaded = (arr) => ({
    type: 'ROVER_IMAGES_LOADED',
    payload: arr
});