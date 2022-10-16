import React from 'react';
import { WhiteBox } from './styles';
import { ProfilePicture } from '../../screens/user/UserProfile/styles';
import Typography from '../ui-library/Typography';
import { Image } from 'react-native';

const DayTrip = ({
  username,
  icon,
  image,
  postTitle,
  likes,
  comments,
}) => {
  return (
    <WhiteBox>
      <Typography>{username}</Typography>
      <ProfilePicture source={resolve(icon)} />
      <Image
        source={resolve(image)}
        style={{ width: 100, height: 100 }}
      />
      <Typography>{postTitle}</Typography>
      <Typography>likes : {likes}</Typography>
      <Typography>comments : {comments}</Typography>
    </WhiteBox>
  );
};

export default DayTrip;
