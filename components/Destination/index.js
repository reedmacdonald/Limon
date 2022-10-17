import React from 'react';
import Typography from '../ui-library/Typography';
import { StyledPressable, StyledImage, BlankBox } from './styled';
import { View } from 'react-native';

export const Destination = ({ title, likes, photo }) => {
  return (
    <StyledPressable>
      <StyledImage source={{ uri: photo.uri }} />
      <View>
        <Typography header>{title}</Typography>
        <Typography>likes : {likes}</Typography>
      </View>
    </StyledPressable>
  );
};

export const BlankDestination = (props) => {
  return (
    <StyledPressable {...props}>
      <BlankBox />
      <View>
        <Typography header>Add a destination</Typography>
        <Typography>likes : 0</Typography>
      </View>
    </StyledPressable>
  );
};
