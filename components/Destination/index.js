import React, { useContext } from 'react';
import { View } from 'react-native';
import { Paths } from '../../constants/NavigationPaths';
import { CurrentDestinationContext } from '../../contexts/CurrentDestinationContext';
import { LemonLogo } from '../ui-library/LemonLogo';
import { Row } from '../ui-library/Row';
import Typography from '../ui-library/Typography';
import { BlankBox, StyledImage, StyledPressable } from './styled';

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
        <Row>
          <Typography>: {likes}</Typography>
        </Row>
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
        <Row>
          <LemonLogo />
          <Typography>: 0</Typography>
        </Row>
      </View>
    </StyledPressable>
  );
};
