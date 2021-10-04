import { take } from 'redux-saga/effects';

export function* testSaga() {
    while (true) {
        console.log('Starting saga'); // - 1; 4 (executes before dispatch and before the next dispatch)
        yield take('IMAGES_REQUESTED'); // will execute when a specific action is dispatched - 2
        console.log('Finishing saga execution'); // - 3 (will execute after the action is dispatched)
    }
}

export function* count() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}