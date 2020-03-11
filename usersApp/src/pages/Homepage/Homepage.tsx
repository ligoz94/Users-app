import React from 'react';
import {Text} from 'react-native';
import * as S from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Homepage = (props: any) => {
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

export default Homepage;
