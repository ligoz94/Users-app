import React from 'react';
import {Text, Linking} from 'react-native';
// Styles
import * as S from './style';
// Components
import {SimpleText} from '../../../../components/atoms';
//Interfaces
import {User} from '../../../../utils/interfaces';

interface Props {
  user: User;
}

const UserInfo: React.FC<Props> = (props: any) => {
  return (
    <S.Container>
      <S.Image source={{uri: props.user && props.user.avatar_url}} />
      <S.Info>
        <SimpleText
          headline="Name"
          title={props.user && props.user.name}></SimpleText>
        <SimpleText
          headline="Profilo"
          title={props.user && props.user.html_url}
          onPress={() =>
            Linking.openURL((props.user && props.user.html_url) || '')
          }>
          Profile
        </SimpleText>
        <SimpleText
          headline="Email"
          title={props.user && props.user.email}></SimpleText>
        <SimpleText
          headline="Location"
          title={props.user && props.user.location}></SimpleText>
      </S.Info>
    </S.Container>
  );
};

export default UserInfo;
