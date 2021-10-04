import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import imagesActionTypes from '../../redux/actions/imagesActions';
import dateActionTypes from '../../redux/actions/dateActions';
import BlueMarble from '../../services/blueMarble'; 
import { setDate } from '../actions/dateActions';
import { imagesLoaded } from '../../redux/actions/imagesActions';

const blueMarble = new BlueMarble();

let lastDate;

// Listeners

export function* requestLastDateListener() { // 1
    yield takeLatest(dateActionTypes.DATE_REQUESTED, () => fetchLastDate);
    console.log('DATE_REQUESTED listener ran')
}

export function* setDateListener() { // 3
    yield takeLatest(dateActionTypes.SET_DATE, fetchImagesByDate);
    console.log('date setter listener ran')
}

export function* requestEarthImagesListener() { 
    /* console.log('ImagesREquested listener ran');
    yield takeEvery(imagesActionTypes.IMAGES_REQUESTED, fetchImagesByDate);  */
    
}
// Handlers

export function* fetchImagesByDate(action) { // 4
    console.log('fetchImagesByDate ran')
    const res = yield call(blueMarble.getNaturalsByDate, action.payload);
    yield put(imagesLoaded(res));
}

export function* fetchLastDate() { // 2
    console.log('fetchLastDate handler ran')
    const dates = yield call(blueMarble.getLastAvailableDate);
    yield put(setDate(dates[0]));
    //astDate = dates[0];
    console.log(`Date was set to ${dates[0]}`);
    /* yield takeLatest(dateActionTypes.SET_DATE, () => fetchImagesByDate(dates[0]));
    console.log('date setter listener ran') */
    /* lastDate = dates[0];
    const res = yield call(blueMarble.getNaturalsByDate, lastDate);
    yield put(imagesLoaded(res)); */
}

