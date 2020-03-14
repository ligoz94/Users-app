import styled from 'styled-components/native';
import variables from '../../../styles/variables';

export const Container = styled.View`
  flex: 1;
`;
export const Separator = styled.View`
  flex: 1;
  height: 1;
  background-color: ${variables.dark};
`;
export const LoadMoreWrapper = styled.View`
  height: 60px;
  background-color: ${variables.blue};
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
