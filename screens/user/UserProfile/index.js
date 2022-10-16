import React, { useContext } from 'react';
import BackgroundImage from '../../../components/ui-library/BackgroundImage';
import Container from '../../../components/ui-library/Container';
import { UserContext } from '../../../contexts/UserContext';
import { ProfilePicture, WhiteBackground } from './styles';
import Typography from '../../../components/ui-library/Typography';
import Button from '../../../components/ui-library/Button';
import { Paths } from '../../../constants/NavigationPaths';
import { FlatList } from 'react-native';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import DayTrip from '../../../components/DayTrip';

export const UserProfile = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const renderItem = (props) => {
    return (
      <DayTrip {...props.item} username={user.username} isUser />
    );
  };

  return (
    <Container style={{ justifyContent: 'space-between' }}>
      <WhiteBackground>
        <BackgroundImage
          alt="grey pattern"
          source={require('../../../assets/Banner.png')}
        />
        <ProfilePicture
          alt="profile picture"
          source={{ uri: user.photo }}
        />
        <Typography>@{user.username}</Typography>
        <Typography>{user.bio}</Typography>
        <Button
          title={'Edit Profile'}
          onPress={() => {
            navigation.navigate(Paths.edituser);
          }}
        ></Button>
        <Button
          title={'Home'}
          onPress={() => {
            navigation.navigate('PostsNavigation', {
              page: Paths.posts,
            });
          }}
        ></Button>
      </WhiteBackground>
      <FlatList data={DATA} renderItem={renderItem} />
    </Container>
  );
};
