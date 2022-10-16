import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';
import Container from '../../../components/ui-library/Container';

export const StyledContainer = styled(Container)`
  background-color: ${Colors.white};
  padding-horizontal: 10px;
`;

export const View = styled.View`
  align-items: start;
`;
