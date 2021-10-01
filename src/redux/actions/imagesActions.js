export const imagesRequested = () => ({
    type: 'IMAGES_REQUESTED'
});

export const imagesError = (err) => ({
    type: 'IMAGES_ERROR',
    payload: err
});

export const imagesLoaded = (arr) => ({
    type: 'IMAGES_LOADED',
    payload: arr
});