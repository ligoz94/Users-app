// Actions
import {
  GET_USER_REPO,
  GET_USER_REPO_FAIL,
  GET_USER_REPO_SUCCESS,
} from './actionTypes';
// Utils
import Config from 'react-native-config';
import {checkError} from '../../utils';

const GetUserRepos = (name: string, sort?: string, direction?: string) => {
  let sortValue: string = sort ? sort : 'full_name';
  let directionValue: string = direction ? direction : 'asc';

  return (dispatch: any) => {
    dispatch({type: GET_USER_REPO});
    return fetch(
      `${Config.REACT_APP_API_URL}/users/${name}/repos?sort=${sortValue}&direction=${directionValue}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token 886f854d7c88059f8eb3ab945f04139410a25829`,
        },
      },
    )
      .then(response => {
        return checkError(response);
      })
      .then(responseJson => {
        dispatch({
          type: GET_USER_REPO_SUCCESS,
          payload: {repos: responseJson},
        });
      })
      .catch(error => {
        dispatch({type: GET_USER_REPO_FAIL, payload: error});
      });
  };
};

export default GetUserRepos;
