import react from 'react';
import React, { useContext, useEffect } from 'react';
import Container from '../../../components/ui-library/Container';
import Typography from '../../../components/ui-library/Typography';
import { CurrentDestinationContext } from '../../../contexts/CurrentDestinationContext';
import {
  StyledTopContainer,
  WhiteBackground,
} from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
//TODO:Organize these imports
import {
  HeaderImage,
  GalleryHolder,
  StyledContainer,
  HorizontalContainer,
  ScrollView,
} from '../Preview/styles';
import { View } from 'react-native';

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
        <WhiteBackground style={{ height: 600, width: '100%' }}>
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
        </WhiteBackground>
      </ScrollView>
    </StyledContainer>
  );
};
