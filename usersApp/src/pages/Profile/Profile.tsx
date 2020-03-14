import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
// Actions
import {GetSingleUser} from '../../store/actions';
// Library
import {connect} from 'react-redux';
import * as S from './style';
// Components
import UserInfo from './components/UserInfo/UserInfo';
//Interfaces
import {User} from '../../utils/interfaces';

interface Props {
  user: User;
  isFetching: boolean;
  hasError: boolean;
  getSingleUser: (name: string) => void;
  navigation: any;
}

const Profile: React.FC<Props> = (props: any) => {
  let title = props.navigation.getParam('title');

  useEffect(() => {
    props.getSingleUser(title);
  }, []);

  return (
    <S.Container>
      {props.isFetching ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <UserInfo user={props.user || {}} />
      )}
    </S.Container>
  );
};

const mapStateToProps = ({UsersReducer}: any) => {
  return {
    user: UsersReducer && UsersReducer.data && UsersReducer.data.user,
    isFetching: UsersReducer && UsersReducer.isFetching,
    hasError: UsersReducer && UsersReducer.hasError,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSingleUser: (name: string) => dispatch(GetSingleUser(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile as any);
