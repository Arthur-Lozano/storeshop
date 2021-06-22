//create our store and bring everything together.

import { createStore } from 'redux';
import reducer from './reducers';
const store = createStore(reducer);
export default store;
getState() //which allows access to the state object
dispatch(action) //which allows state to be updated
subscribe(listener)