import * as earthSaga from './earthSaga';

export function initSagas(sagaMiddleware) {
    Object.values(earthSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware)); 
}