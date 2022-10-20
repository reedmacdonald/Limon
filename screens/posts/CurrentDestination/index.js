import React from 'react';
import { View } from 'react-native';
import Button from '../../../components/ui-library/Button';
import Typography from '../../../components/ui-library/Typography';
import { CurrentDestinationContext } from '../../../contexts/CurrentDestinationContext';
//TODO:Organize these imports
import {
  HeaderImage,
  HorizontalContainer,
  ScrollView,
  StyledContainer,
} from '../Preview/styles';

export const CurrentDestination = ({ navigation }) => {
  const { currentDestination } = React.useContext(
    CurrentDestinationContext
  );
  return (
    <StyledContainer>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 400, width: '100%' }}
      >
        <HeaderImage source={{ uri: currentDestination.photo.uri }} />
        <StyledWhiteBackground>
          <Typography header>{currentDestination.title}</Typography>
          <Typography>{currentDestination.caption}</Typography>
          <HorizontalContainer>
            <Typography>
              {currentDestination.username || 'UnknownUser'}
            </Typography>
            <View>
              <Typography>
                likes : {currentDestination.likes}
              </Typography>
            </View>
          </HorizontalContainer>
          <Typography>Image Gallery</Typography>
          <Button title="Done" />
        </StyledWhiteBackground>
      </ScrollView>
    </StyledContainer>
  );
};
