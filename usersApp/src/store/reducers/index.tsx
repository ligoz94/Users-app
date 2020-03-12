import {combineReducers} from 'redux';
// Reducers
import UsersReducer from './UsersReducer';

const appReducer = combineReducers({
  UsersReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
