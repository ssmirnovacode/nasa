import * as testSaga from './testSaga';

export function initSagas(sagaMiddleware) {
    Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware)); // will run sagaMiddleware on all the functions exported from testSaga
}