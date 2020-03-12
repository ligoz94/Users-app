import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
// Styles
import * as S from './style';
// Actions
import {GetUsers, GetSingleUser} from '../../store/actions';
// Library
import {connect} from 'react-redux';

const Homepage = (props: any) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <S.Container>
      <Text>lista</Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('TabScreen', {
            title: 'Utente prova',
          })
        }>
        <Text>utente prova</Text>
      </TouchableOpacity>
    </S.Container>
  );
};

const mapStateToProps = ({UsersReducer}: any) => {
  return {
    users: UsersReducer && UsersReducer.data && UsersReducer.data.users,
    isFetching:
      UsersReducer && UsersReducer.data && UsersReducer.data.isFetching,
    hasError: UsersReducer && UsersReducer.data && UsersReducer.data.hasError,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsers: () => dispatch(GetUsers()),
    getSingleUser: (id: number) => dispatch(GetSingleUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
