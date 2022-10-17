import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const StyledPressable = styled.Pressable`
  width: 100%;
  background-color: ${Colors.white};
  height: 100px;
  margin-vertical: 5px;
  padding: 10px;
  flex-direction: row;
`;

export const StyledImage = styled.Image`
  height: 50px;
  width: 50px;
  margin: 10px;
`;

export const BlankBox = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${Colors.grey};
  margin: 10px;
`;
