// Actions
import {GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS} from './actionTypes';
// Utils
import Config from 'react-native-config';
import {checkError} from '../../utils';

const GetUsers = () => {
  return (dispatch: any) => {
    dispatch({type: GET_USERS});
    return fetch(`${Config.REACT_APP_API_URL}/users`, {
      method: 'GET',
    })
      .then(response => {
        return checkError(response);
      })
      .then(responseJson => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: {users: responseJson},
        });
      })
      .catch(error => {
        dispatch({type: GET_USERS_FAIL, payload: error});
      });
  };
};

export default GetUsers;
