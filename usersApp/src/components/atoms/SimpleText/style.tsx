import styled from 'styled-components/native';
import variables from '../../../styles/variables';
import fontSize from '../../../styles/fontSize';

export const Container = styled.View`
  padding: 10px 0 10px;
`;
export const Headline = styled.Text`
  font-size: ${fontSize.small}px;
  font-weight: bold;
  margin-bottom: 3px;
`;
export const Title = styled.Text`
  font-size: ${fontSize.normal}px;
`;
