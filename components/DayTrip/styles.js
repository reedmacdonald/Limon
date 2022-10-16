import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import { ProfilePicture } from '../../screens/user/UserProfile/styles';

export const WhiteBox = styled.View`
  background-color: ${Colors.white};
  border-radius: 20px;
  width: 300px;
  margin-top: 10px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;

export const ImageHolder = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 5px;
`;
export const TopHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const BottomHolder = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const StyledProfilePicture = styled(ProfilePicture)`
  width: 30;
  height: 30;
  position: relative;
  top: 0;
  left: 0;
`;
export const Image = styled.Image`
  width: 100%;
  height: 250;
  border-radius: 10px;
`;
