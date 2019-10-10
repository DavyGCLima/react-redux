import { createStore, compose, applyMiddleware } from 'redux';


const composer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
  : applyMiddleware(...[]);

const store = createStore(composer);

export default store;
