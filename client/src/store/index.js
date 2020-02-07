import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducer";
import mySaga from "saga";
const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  RootReducer,
  compose(
    applyMiddleware(logger, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(mySaga);

export default Store;
