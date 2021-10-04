import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

//sagaMiddleware.run(testSaga)
initSagas(sagaMiddleware);

export default store;