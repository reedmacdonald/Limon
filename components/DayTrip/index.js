import React from 'react';
import { Text, View } from 'react-native';
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
}) => {
  const [number] = React.useState(Math.floor(Math.random() * 7));

  return (
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
        <Image source={locations[number]} />
      </ImageHolder>
      <Typography>{postTitle}</Typography>
      <BottomHolder>
        <BottomSubHolder>
          <IconTwo name="favorite-outline" size={20} color="black" />
          <Typography>likes : {likes}</Typography>
        </BottomSubHolder>
        <BottomSubHolder>
          <Icon name="comments" size={20} color="black" />
          <Typography>comments : {comments}</Typography>
        </BottomSubHolder>
      </BottomHolder>
    </WhiteBox>
  );
};

export default DayTrip;
