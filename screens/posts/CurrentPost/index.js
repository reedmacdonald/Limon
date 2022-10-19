import react from 'react';
import React, { useContext } from 'react';
import Container from '../../../components/ui-library/Container';
import Typography from '../../../components/ui-library/Typography';
import { CurrentPostContext } from '../../../contexts/CurrentPostContext';
import { ScrollView } from 'react-native';
import {
  StyledTopContainer,
  WhiteBackground,
} from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
//TODO:Organize these imports
import {
  HeaderImage,
  GalleryHolder,
  GalleryImage,
  StyledContainer,
  BottomContainer,
  HorizontalContainer,
} from '../Preview/styles';

import MockOne from '../../../assets/locationMocks/mockOne.jpg';

//TODO: Readd destinations and photo galleries once this is unmocked

export const CurrentPost = ({ navigation }) => {
  const { currentPost } = React.useContext(CurrentPostContext);
  return (
    <StyledContainer>
      <StyledTopContainer>
        <Typography
          onPress={() => {
            navigation.goBack();
          }}
        >
          X
        </Typography>
        <Typography bold>Preview</Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <ScrollView contentContainerStyle={{ paddingBottom: 400 }}>
        <HeaderImage source={MockOne} />
        <WhiteBackground style={{ height: 600 }}>
          <Typography header>{currentPost.postTitle}</Typography>
          <Typography>{currentPost.postCaption}</Typography>
          <HorizontalContainer>
            <Typography>{currentPost.username}</Typography>
            <Typography>likes : {currentPost.likes}</Typography>
          </HorizontalContainer>
          <Typography>Image Gallery</Typography>
          <Button title="Done" />
        </WhiteBackground>
        <BottomContainer>
          <Typography header>Destinations</Typography>
        </BottomContainer>
        <WhiteBackground>
          <Typography header>Comments</Typography>
        </WhiteBackground>
      </ScrollView>
    </StyledContainer>
  );
};
