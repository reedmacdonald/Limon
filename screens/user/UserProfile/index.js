import React, { useContext } from 'react';
import BackgroundImage from '../../../components/BackgroundImage';
import Container from '../../../components/Container';
import { UserContext } from '../../../contexts/UserContext';
import { ProfilePicture, WhiteBackground } from './styles';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';

export const UserProfile = () => {
  const { user } = useContext(UserContext);

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
        <Button title={'Edit Profile'}></Button>
      </WhiteBackground>
      <Typography>No Posts</Typography>
    </Container>
  );
};
