import { call, put, takeLatest } from 'redux-saga/effects';
import MarsRovers from '../../services/marsRovers';
import roverActionTypes, { setRoverData } from '../actions/roverActions';
import { roverImagesError, roverImagesRequested, roverImagesLoaded } from '../actions/roverImagesActions';

const marsRovers = new MarsRovers();

// Mounting:

// 1 request a manifest by name (default)
// 2. Set rover data and date
// 3. request rover photos by name and date

//Updating:
// 1. If date changed - request rover photos by name and date
// 2 if name changed - 1 request a manifest by name (default)
                    // 2. Set rover data and date
                    // 3. request rover photos by name and date


// Listeners
export function* roverNameListener() { // 1
    yield takeLatest(roverActionTypes.SET_ROVER, fetchRoverData);
    console.log('SET_ROVER listener ran')
}

export function* roverDataListener() { // 3
    yield takeLatest(roverActionTypes.SET_ROVER_DATA, fetchRoverImages);
    console.log('SET_ROVER_DATA listener ran')
}

export function* roverSelectedDateListener() {
    yield takeLatest(roverActionTypes.SELECT_ROVER_DATE, fetchRoverImages) // only 1 arg instead of 2....
}

// Handlers

export function* fetchRoverData(action) { // 2
    yield put(roverImagesRequested()); // to set up loading state
    const data = yield call(marsRovers.getRoverManifest, action.payload)
    console.log(data.photo_manifest);
    if (!data) {
        yield put(roverImagesError({ message: 'NASA API is not available now. Try again later'}))
    }
    else yield put(setRoverData(data.photo_manifest)); // date included as lastUpdate
}

export function* fetchRoverImages(action) { // 4
    yield put(roverImagesRequested());
    console.log([action.payload.name, action.payload.max_date])
    const res = yield call(marsRovers.getRoverPhotosByDate, action.payload.name, (action.payload.max_date || action.payload.date));
    if (!res) {
        yield put(roverImagesError({ message: 'NASA API is not available now. Try again later'}))
    }
    else if (res.photos.length < 1) {
        yield put(roverImagesError({ message: 'This rover did not take any pictures on selected day. Please change the date or rover'}))
    }
    else yield put(roverImagesLoaded(res.photos))

}