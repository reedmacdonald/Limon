import React, { useContext } from 'react';
import BackgroundImage from '../../../components/ui-library/BackgroundImage';
import Container from '../../../components/ui-library/Container';
import { UserContext } from '../../../contexts/UserContext';
import { ProfilePicture, WhiteBackground } from './styles';
import Typography from '../../../components/ui-library/Typography';
import Button from '../../../components/ui-library/Button';
import { Paths } from '../../../constants/NavigationPaths';

export const UserProfile = ({ navigation }) => {
  const { user } = useContext(UserContext);
  console.log(user, '<---user');

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
      </WhiteBackground>
      <Typography>No Posts</Typography>
    </Container>
  );
};
