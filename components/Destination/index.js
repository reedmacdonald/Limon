import React, { useContext } from 'react';
import Typography from '../ui-library/Typography';
import { StyledPressable, StyledImage, BlankBox } from './styled';
import { View, Image } from 'react-native';
import { CurrentDestinationContext } from '../../contexts/CurrentDestinationContext';
import { Paths } from '../../constants/NavigationPaths';
import Lemon from '../../assets/lemon.png';

export const Destination = ({
  title,
  likes,
  photo,
  navigation,
  photos,
}) => {
  const { setCurrentDestinationProperty } = useContext(
    CurrentDestinationContext
  );

  const onPress = () => {
    setCurrentDestinationProperty({ title, likes, photo, photos });
    navigation.navigate(Paths.userNavigation, {
      screen: Paths.currentdestination,
    });
  };
  return (
    <StyledPressable onPress={onPress}>
      <StyledImage source={{ uri: photo.uri }} />
      <View>
        <Typography header>{title}</Typography>
        <View style={{ flexDirection: 'row' }}>
          <Image source={Lemon} style={{ width: 30, height: 30 }} />
          <Typography>likes : {likes}</Typography>
        </View>
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
