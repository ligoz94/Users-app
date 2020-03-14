import React from 'react';
// Styles
import * as S from './style';

interface Props {
  headline?: string;
  title: string;
  onPress?: () => void;
}

const SimpleText: React.FC<Props> = (props: any) => {
  return (
    <S.Container>
      <S.Headline adjustsFontSizeToFit>{props.headline}</S.Headline>
      <S.Title adjustsFontSizeToFit onPress={props.onPress}>
        {props.title}
      </S.Title>
    </S.Container>
  );
};

export default SimpleText;
