import styled from 'styled-components/native';
import variables from '../../../styles/variables';

export const Container = styled.View`
  flex: 1;
  background-color: ${variables.white};
`;
export const Row = styled.View`
  flex-direction: row;
  padding: 15px 10px;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${variables.grey};
  border-bottom-width: 1px;
`;
export const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Filters = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const PickerWrapper = styled.View`
  min-width: 80px;
  padding: 0 10px;
`;
export const FilterTitle = styled.Text`
  font-weight: 600;
`;
