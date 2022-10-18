import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';

export const ProfilePicture = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border-width: 3px;
  border-color: ${Colors.white};
  position: absolute;
  top: -50px;
  left: 20px;
`;

export const WhiteBackground = styled.View`
  background-color: ${Colors.white};
  width: 100%;
  height: 280px;
`;
export const InnerBackground = styled.View`
  position: absolute;
  width: 100%;
  top: 150px;
  height: 130px;
  justify-content: center;
  padding: 10px;
`;

export const FollowersHolder = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`;

export const SecondaryButton = styled.Pressable`
  background-color: ${Colors.white};
  color: ${Colors.charcoal};
  border-width: 1px;
  border-radius: 30px;
  border-color: ${Colors.charcoal};
  position: absolute;
  padding-vertical: 5px;
  padding-horizontal: 20px;
`;

export const GreyBox = styled.View`
  background-color: ${Colors.grey};
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding-horizontal: 10px;
`;
export const IconHolders = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
`;
