import * as earthSagas from './earthSagas';
import * as marsSagas from './marsSagas';

export function initSagas(sagaMiddleware) {
    Object.values(earthSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware)); 
    Object.values(marsSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware)); 
}