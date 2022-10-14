import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';

export const ProfilePicture = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: ${Colors.white};
  position: absolute;
  top: 100px;
  left: 20px;
`;

export const WhiteBackground = styled.View`
  background-color: ${Colors.white};
  width: 100%;
  height: 300px;
`;
