import styled from 'styled-components/native';
import Container from '../../../components/ui-library/Container';
import { Colors } from '../../../constants/Colors';
import InputText from '../../../components/ui-library/TextInput';

export const StyledContainer = styled(Container)`
  padding-horizontal: 20px;
  width: 100%;
`;

export const ScrollView = styled.ScrollView``;

export const StyledInputText = styled(InputText)`
  background-color: ${Colors.white};
`;

export const DayTripHolder = styled.View`
  margin-horizontal: 10px;
`;

export const FlatList = styled.FlatList`
  min-height: 350px;
  flexgrow: 0;
  padding-vertical: 5px;
`;

export const Image = styled.Image`
  height: 60px;
  width: 100%;
`;
