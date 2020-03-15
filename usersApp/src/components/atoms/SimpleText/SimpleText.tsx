import React from 'react';
// Styles
import * as S from './style';

interface Props {
  headline?: string;
  title: string;
  onPress?: () => void;
  style?: object;
}

const SimpleText: React.FC<Props> = (props: any) => {
  return (
    <S.Container>
      <S.Headline
        style={props.style && props.style.headline}
        adjustsFontSizeToFit>
        {props.headline}
      </S.Headline>
      <S.Title
        style={props.style && props.style.title}
        adjustsFontSizeToFit
        onPress={props.onPress}>
        {props.title}
      </S.Title>
    </S.Container>
  );
};

export default SimpleText;
