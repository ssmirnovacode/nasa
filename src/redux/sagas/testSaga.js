import { take, put, delay } from 'redux-saga/effects';

export function* testSaga() {
    while (true) {
        console.log('Starting saga'); 
        const state = yield take('TEST MESSAGE'); // returns an object {type: 'TEST MESSAGE', payload: 1000, @@redux-saga/SAGA_ACTION: true}
        console.log('Finishing saga execution', state); 
    }
}

export function* count() {
    while(true) {
        delay(1000);
        yield put({ type: 'TEST MESSAGE', payload: 1000}); // PUT simulates the dispatch of action
    }
}