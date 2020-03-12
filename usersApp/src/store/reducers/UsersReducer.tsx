// Actions
import {
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_SINGLE_USER,
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_SUCCESS,
} from '../actions/actionTypes';
// Interfaces
import {Action} from '../../utils/interfaces';

const INITIAL_STATE = {
  isFetching: false,
  users: [],
  user: {},
  hasError: false,
  errorMessage: null,
};

const UsersReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case GET_USERS:
    case GET_SINGLE_USER:
      return {...state, isFetching: true};
    case GET_USERS_SUCCESS:
    case GET_SINGLE_USER_SUCCESS:
      return {...state, isFetching: false, data: action.payload};
    case GET_USERS_FAIL:
    case GET_SINGLE_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default UsersReducer;
