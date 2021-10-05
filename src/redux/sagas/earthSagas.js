import { call, put, takeLatest } from 'redux-saga/effects';
import dateActionTypes from '../actions/dateActions';
import BlueMarble from '../../services/blueMarble'; 
import { setDate } from '../actions/dateActions';
import imagesTypes, { imagesLoaded, imagesRequested, imagesError } from '../actions/imagesActions';
import imageTypeSelect from '../../components/image-type-select/image-type-select';

const blueMarble = new BlueMarble();

// Watchers

export function* requestLastDateWatcher() { // 1
    yield takeLatest(dateActionTypes.DATE_REQUESTED, () => fetchLastDateHandler);
    //console.log('DATE_REQUESTED listener ran')
}

export function* setDateWatcher() { // 3
    yield takeLatest(dateActionTypes.SET_DATE, fetchImagesByDateHandler);
    //console.log('date setter listener ran')
}

export function* setImagesTypeWatcher() {
    yield takeLatest(imagesTypes.SET_IMAGE_TYPE, fetchLastDateHandler)
}

// Handlers

export function* fetchImagesByDateHandler(action, imageType='natural') { // 4
    //console.log('fetchImagesByDate ran');
    yield put(imagesRequested()); // for loading effect
    if (action.payload) {
        if (imageType === 'enhanced') {
            const res = yield call(blueMarble.getEnhancedByDate, action.payload);
            if (!res) {
                yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
            }
            else if (res.length < 1) {
                yield put(imagesError({ message: 'No images found for selected day. Please choose another date'}))
            }
            else yield put(imagesLoaded(res));
        }
        else {
            const res = yield call(blueMarble.getNaturalsByDate, action.payload);
            if (!res) {
                yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
            }
            else if (res.length < 1) {
                yield put(imagesError({ message: 'No images found for selected day. Please choose another date'}))
            }
            else yield put(imagesLoaded(res));
        }
        
    }
    else console.log('fetchImagesByDateHandler: date is undefined');
    
    
}

export function* fetchLastDateHandler(action) { // 2
    //console.log('fetchLastDate handler ran')
    if (action.payload === 'enhanced') {
        const dates = yield call(blueMarble.getLastAvailableEnhancedDate);
        if (!dates) {
            yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
        }
        
        else {
            yield put(setDate(dates[0]));
            yield call(fetchImagesByDateHandler, { payload: dates[0] }, 'enhanced')
        }
    }
    else { // natural dates by default and type set as 'natural'
        const dates = yield call(blueMarble.getLastAvailableDate);
        if (!dates) {
            yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
        }
        else yield put(setDate(dates[0]));
        //console.log(`Date was set to ${dates[0]}`);
    }
    
}

