import { createStore, compose, applyMiddleware } from 'redux';

import todos from './reducers/todo';

const composer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
  : applyMiddleware(...[]);

const store = createStore(todos, composer);

export default store;
