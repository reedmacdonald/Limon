import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import { ProfilePicture } from '../../screens/user/UserProfile/styles';

export const WhiteBox = styled.View`
  background-color: ${Colors.white};
  border-radius: 20px;
  width: 335px;
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
  justify-content: space-between;
`;
export const BottomHolder = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const StyledProfilePicture = styled(ProfilePicture)`
  width: 30px;
  height: 30px;
  position: relative;
  top: 0;
  left: 0;
`;
export const Image = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

export const FollowingText = styled.Text`
  border-width: 2px;
  background-color: ${Colors.limeGreen};
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  border-color:${Colors.limeGreen}
  overflow: hidden;
  background-color: ${(props) =>
    props.following ? Colors.limeGreen : Colors.white};
  color: ${(props) =>
    props.following ? Colors.white : Colors.limeGreen};
`;

export const UsernameHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomSubHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;
