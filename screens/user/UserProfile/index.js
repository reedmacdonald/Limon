import React, { useContext } from 'react';
import Container from '../../../components/ui-library/Container';
import { UserContext } from '../../../contexts/UserContext';
import {
  ProfilePicture,
  WhiteBackground,
  InnerBackground,
  FollowersHolder,
  SecondaryButton,
  GreyBox,
  IconHolders,
} from './styles';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';
import { FlatList } from 'react-native';
import { DayTripsContext } from '../../../contexts/DayTripsContext';
import DayTrip from '../../../components/DayTrip';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BackgroundImage } from '../../../components/ui-library/BackgroundImage';

export const UserProfile = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { dayTrips } = useContext(DayTripsContext);

  const addNewPost = () => {
    navigation.navigate(Paths.postsNavigation, {
      screen: Paths.newpost,
    });
  };

  const editUser = () => {
    navigation.navigate(Paths.edituser);
  };
  const renderItem = (props) => {
    return (
      <DayTrip
        {...props.item}
        username={user.username}
        isUser
        navigation={navigation}
      />
    );
  };

  return (
    <Container style={{ justifyContent: 'space-between' }}>
      <WhiteBackground>
        <BackgroundImage
          alt="grey pattern"
          source={require('../../../assets/Banner.png')}
        />
        <InnerBackground>
          <ProfilePicture
            alt="profile picture"
            source={{ uri: user.photo }}
          />
          <Typography header>{user.username}</Typography>
          <Typography>@{user.username}</Typography>
          <Typography>{user.bio}</Typography>
          <FollowersHolder>
            <Typography>{user.followers || 0} Followers</Typography>
            <Typography>{user.following || 0} Following</Typography>
          </FollowersHolder>
          <SecondaryButton
            onPress={editUser}
            style={{ top: 0, right: 10 }}
          >
            <Typography>Edit Profile</Typography>
          </SecondaryButton>

          <SecondaryButton
            style={{ top: 35, right: 10 }}
            onPress={addNewPost}
          >
            <Typography>Home</Typography>
          </SecondaryButton>
        </InnerBackground>
      </WhiteBackground>
      <GreyBox>
        <IconHolders
          style={{ borderRightWidth: 1, borderColor: 'white' }}
        >
          <Ionicons name={'home-outline'} size={32} color={'white'} />
        </IconHolders>
        <IconHolders>
          <Ionicons
            name={'bookmark-outline'}
            size={32}
            color={'white'}
          />
        </IconHolders>
      </GreyBox>
      <FlatList data={dayTrips} renderItem={renderItem} />
    </Container>
  );
};
