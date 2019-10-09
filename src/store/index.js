import { createStore } from 'redux';

import todos from './reducers/todo';

const store = createStore(todos);

export default store;
