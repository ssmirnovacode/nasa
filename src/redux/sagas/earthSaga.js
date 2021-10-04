import { take, call, put } from 'redux-saga/effects';
import imagesActionTypes from '../../redux/actions/imagesActions';
import BlueMarble from '../../services/blueMarble'; 
import { setDate } from '../actions/dateActions';
import { imagesLoaded } from '../../redux/actions/imagesActions';

const blueMarble = new BlueMarble();

export function* requestEarthImages() {
    yield take(imagesActionTypes.IMAGES_REQUESTED); // somehow it runs only on componentDidMount, not on update...
    console.log('Images requested!');
    const dates = yield call(blueMarble.getLastAvailableDate);
    yield put(setDate(dates[0]));
    console.log(`Date was set to ${dates[0]}`);
    const res = yield call(blueMarble.getNaturalsByDate, dates[0]);
    yield put(imagesLoaded(res));
    
}