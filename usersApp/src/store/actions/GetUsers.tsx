// Actions
import {GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS} from './actionTypes';
// Utils
import Config from 'react-native-config';
import {checkError} from '../../utils';

const GetUsers: any = (name: string) => {
  return (dispatch: any) => {
    let url = '';
    if (name && name.length > 0) {
      url = `${Config.REACT_APP_API_URL}/search/users?q=${name}`;
    } else {
      url = `${Config.REACT_APP_API_URL}/users?since=1&per_page=30`;
    }
    dispatch({type: GET_USERS});
    return fetch(url, {
      method: 'GET',
    })
      .then(response => {
        return checkError(response);
      })
      .then(responseJson => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: name ? {users: responseJson.items} : {users: responseJson},
        });
      })
      .catch(error => {
        dispatch({type: GET_USERS_FAIL, payload: error});
      });
  };
};

export default GetUsers;
