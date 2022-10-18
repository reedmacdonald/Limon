import React, { useContext } from 'react';
import Typography from '../ui-library/Typography';
import { StyledPressable, StyledImage, BlankBox } from './styled';
import { View } from 'react-native';
import { CurrentDestinationContext } from '../../contexts/CurrentDestinationContext';
import { Paths } from '../../constants/NavigationPaths';

export const Destination = ({ title, likes, photo, navigation }) => {
  const { setCurrentDestinationProperty } = useContext(
    CurrentDestinationContext
  );

  const onPress = () => {
    setCurrentDestinationProperty({ title, likes, photo });
    navigation.navigate(Paths.userNavigation, {
      screen: Paths.currentdestination,
    });
  };
  return (
    <StyledPressable onPress={onPress}>
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
