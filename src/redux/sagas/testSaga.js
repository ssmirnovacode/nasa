import { take, put, delay, call } from 'redux-saga/effects';

function double(num) {
    return num*2
}
export function* testSaga() {
    while (true) {
        console.log('Starting saga'); // 1) ... 5)
        const state = yield take('TEST MESSAGE'); 
        const a = yield call(double, 2); // calling a function with call
        console.log(a); // 2) (=4)
        const b = double(3); // simply calling a function
        console.log(b); // 3) (=6)
        console.log('Finishing saga execution', state); // 4)
    }
}

export function* count() {
    while(true) {
        delay(1000);
        yield put({ type: 'TEST MESSAGE', payload: 1000}); // PUT simulates the dispatch of action
    }
}