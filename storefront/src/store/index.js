import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart-store';
import productsReducer from './product-store';


// later on, in a component, family here is: state.family...
const reducers = combineReducers({
  product: productsReducer,
  cart: cartReducer
})

const store = () => createStore(reducers, composeWithDevTools());

export default store();
