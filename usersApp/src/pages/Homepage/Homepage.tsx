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
      <UsersList navigation={props.navigation}></UsersList>
    </S.Container>
  );
};

export default Homepage;
