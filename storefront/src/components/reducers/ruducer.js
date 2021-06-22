//where we define the reducers for each action
//These specify how the application’s state should change in response to each action
//This is where we can record our initial state
//It’s common to pass in our initial state as the default argument, and this is also where we import our actions

import { ADD_ONE, MINUS_ONE } from './actions';


const initialState = {
  number: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1
      };
    case MINUS_ONE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
export default reducer;