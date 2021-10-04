import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { testSaga } from "./sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(testSaga)

export default store;