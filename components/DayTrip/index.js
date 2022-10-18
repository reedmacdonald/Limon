import React, { useContext } from 'react';
import { Text, View, Pressable } from 'react-native';
import {
  WhiteBox,
  ImageHolder,
  TopHolder,
  BottomHolder,
  StyledProfilePicture,
  Image,
  FollowingText,
  UsernameHolder,
  BottomSubHolder,
} from './styles';
import Icon from '@expo/vector-icons/FontAwesome5';
import IconTwo from '@expo/vector-icons/MaterialIcons';
import Typography from '../ui-library/Typography';
import MockOne from '../../assets/locationMocks/mockOne.jpg';
import MockTwo from '../../assets/locationMocks/mockTwo.jpg';
import MockThree from '../../assets/locationMocks/mockThree.jpg';
import MockFour from '../../assets/locationMocks/mockFour.jpg';
import MockFive from '../../assets/locationMocks/mockFive.jpg';
import MockSix from '../../assets/locationMocks/mockSix.jpg';
import MockSeven from '../../assets/locationMocks/mockSeven.jpg';
import AlphonsoDavies from '../../assets/avatarMocks/AlphonsoDavies.jpg';
import ThomasMuller from '../../assets/avatarMocks/ThomasMuller.jpeg';
import JoshuaKimmich from '../../assets/avatarMocks/JoshuaKimmich.jpg';
import LeonGoretzka from '../../assets/avatarMocks/LeonGoretzka.jpg';
import LeroySane from '../../assets/avatarMocks/LeroySane.jpg';
import SergeGnabry from '../../assets/avatarMocks/SergeGnabry.jpg';
import ManuelNeuer from '../../assets/avatarMocks/ManuelNeuer.jpg';
import { CurrentPostContext } from '../../contexts/CurrentPostContext';
import { Paths } from '../../constants/NavigationPaths';

const locations = [
  MockOne,
  MockTwo,
  MockThree,
  MockFour,
  MockFive,
  MockSix,
  MockSeven,
];

const players = [
  AlphonsoDavies,
  ThomasMuller,
  JoshuaKimmich,
  LeonGoretzka,
  LeroySane,
  SergeGnabry,
  ManuelNeuer,
];

const DayTrip = ({
  username,
  postTitle,
  likes,
  comments,
  following,
  isUser,
  navigation,
  photos,
}) => {
  const [number] = React.useState(Math.floor(Math.random() * 7));
  const { setCurrentPostProperty } = useContext(CurrentPostContext);

  const onPress = () => {
    setCurrentPostProperty({
      username,
      postTitle,
      likes,
      comments,
      following,
      isUser,
      photos: photos,
    });
    navigation.navigate(Paths.userNavigation, {
      screen: Paths.currentpost,
    });
  };

  return (
    <Pressable onPress={onPress}>
      <WhiteBox>
        <TopHolder>
          <UsernameHolder>
            <StyledProfilePicture source={players[number]} />
            <Typography>{username}</Typography>
          </UsernameHolder>
          {!isUser ? (
            <FollowingText>
              {following ? 'Following' : 'Follow'}
            </FollowingText>
          ) : null}
        </TopHolder>
        <ImageHolder>
          {!photos ? (
            <Image source={locations[number]} />
          ) : (
            <Image source={{ uri: photos[0].uri }} />
          )}
        </ImageHolder>
        <Typography>{postTitle}</Typography>
        <BottomHolder>
          <BottomSubHolder>
            <IconTwo
              name="favorite-outline"
              size={20}
              color="black"
            />
            <Typography>likes : {likes}</Typography>
          </BottomSubHolder>
          <BottomSubHolder>
            <Icon name="comments" size={20} color="black" />
            <Typography>comments : {comments}</Typography>
          </BottomSubHolder>
        </BottomHolder>
      </WhiteBox>
    </Pressable>
  );
};

export default DayTrip;
