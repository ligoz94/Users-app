import React from 'react';
import {ActivityIndicator} from 'react-native';
// Styles
import * as S from './style';
// Components
import UsersList from './components/UsersList';

interface Props {}

const Homepage: React.FC<Props> = (props: any) => {
  return (
    <S.Container>
      {props.isFetching ? (
        <ActivityIndicator size="large" />
      ) : (
        <UsersList></UsersList>
      )}
    </S.Container>
  );
};

export default Homepage;
