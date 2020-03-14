import styled from 'styled-components/native';
import variables from '../../../../styles/variables';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
`;
export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  align-self: flex-start;
`;
export const Info = styled.View`
  flex: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;
