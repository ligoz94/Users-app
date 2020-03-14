// Actions
import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_SUCCESS,
} from './actionTypes';
// Utils
import Config from 'react-native-config';
import {checkError} from '../../utils';

const GetSingleUser = (name: string) => {
  return (dispatch: any) => {
    dispatch({type: GET_SINGLE_USER});
    return fetch(`${Config.REACT_APP_API_URL}/users/${name}`, {
      method: 'GET',
    })
      .then(response => {
        return checkError(response);
      })
      .then(responseJson => {
        dispatch({
          type: GET_SINGLE_USER_SUCCESS,
          payload: {user: responseJson},
        });
      })
      .catch(error => {
        dispatch({type: GET_SINGLE_USER_FAIL, payload: error});
      });
  };
};

export default GetSingleUser;
