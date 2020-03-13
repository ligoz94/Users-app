import styled from 'styled-components/native';
import variables from '../../styles/variables';

export const Container = styled.View`
  flex: 1;
  background-color: ${variables.white};
`;

export const TextInput = styled.TextInput`
  height: 60px;
  padding: 0 15px;
  border-bottom-color: #c3c3c3;
  border-bottom-width: 1px;
  background-color: ${variables.grey};
`;
