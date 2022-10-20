import styled from 'styled-components/native';
import Container from '../../../components/ui-library/Container';
import { Colors } from '../../../constants/Colors';
import InputText from '../../../components/ui-library/TextInput';

export const StyledContainer = styled(Container)`
  padding-horizontal: 20px;
  width: 100%;
`;

export const ScrollView = styled.ScrollView`
  padding-top: 50px;
  padding-bottom: 200px;
`;

export const StyledInputText = styled(InputText)``;

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
  padding-top: 20px;
`;

export const IconHolder = styled.View`
  flex-direction: row;
  width: 100%;
  padding-vertical: 20px;
`;

export const IconSubHolder = styled.View`
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const BottomFlatlist = styled.FlatList`
  margin-bottom: 50px;
`;
