import { combineReducers } from 'redux';

import todos from './reducers/todos';

const appReducer = combineReducers({
  todos,
});

export default (state, action) => {
  const nextState = { ...state };
  return appReducer(nextState, action);
};
