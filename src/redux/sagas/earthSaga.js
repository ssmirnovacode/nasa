import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import imagesActionTypes from '../../redux/actions/imagesActions';
import dateActionTypes from '../../redux/actions/dateActions';
import BlueMarble from '../../services/blueMarble'; 
import { setDate } from '../actions/dateActions';
import { imagesLoaded, imagesRequested, imagesError } from '../../redux/actions/imagesActions';

const blueMarble = new BlueMarble();

// Listeners

export function* requestLastDateListener() { // 1
    yield takeLatest(dateActionTypes.DATE_REQUESTED, () => fetchLastDateHandler);
    //console.log('DATE_REQUESTED listener ran')
}

export function* setDateListener() { // 3
    yield takeLatest(dateActionTypes.SET_DATE, fetchImagesByDateHandler);
    //console.log('date setter listener ran')
}

// Handlers

export function* fetchImagesByDateHandler(action) { // 4
    //console.log('fetchImagesByDate ran');
    yield put(imagesRequested()); // for loading effect
    const res = yield call(blueMarble.getNaturalsByDate, action.payload);
    if (!res) {
        yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
    }
    else if (res.length < 1) {
        yield put(imagesError({ message: 'No images found for selected day. Please choose another date'}))
    }
    else yield put(imagesLoaded(res));
}

export function* fetchLastDateHandler() { // 2
    //console.log('fetchLastDate handler ran')
    const dates = yield call(blueMarble.getLastAvailableDate);
    if (!dates) {
        yield put(imagesError({ message: 'NASA API is not available. Try again later...'}))
    }
    else yield put(setDate(dates[0]));
    //console.log(`Date was set to ${dates[0]}`);
}

