import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favorites from './reducers/favoretes';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];


const composer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const store = createStore(favorites, composer);

sagaMiddleware.run(sagas);

export default store;
