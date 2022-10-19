import React, { useContext } from 'react';
import { Text, View, Pressable } from 'react-native';
import Lemon from '../../assets/lemon.png';
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
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../constants/Colors';

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
  isFavorite,
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
      isFavorite,
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {!isUser ? (
              <FollowingText style={{ marginRight: 10 }}>
                {following ? 'Following' : 'Follow'}
              </FollowingText>
            ) : null}
            <Entypo name={'dots-three-horizontal'} size={20} />
          </View>
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
          <View style={{ flexDirection: 'row' }}>
            <BottomSubHolder>
              <Image
                source={Lemon}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <Typography>likes : {likes}</Typography>
            </BottomSubHolder>
            <BottomSubHolder style={{ paddingLeft: 10 }}>
              <Icon name="comments" size={20} color="black" />
              <Typography>{comments} comments</Typography>
            </BottomSubHolder>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name={'send'}
              size={20}
              color={'black'}
              style={{ paddingRight: 10 }}
            />
            {isFavorite ? (
              <Ionicons
                name={'bookmark'}
                size={20}
                color={Colors.limeGreen}
              />
            ) : (
              <Ionicons
                name={'bookmark-outline'}
                size={20}
                color={'black'}
              />
            )}
          </View>
        </BottomHolder>
      </WhiteBox>
    </Pressable>
  );
};

export default DayTrip;
