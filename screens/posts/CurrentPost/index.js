import React from 'react';
import { ScrollView } from 'react-native';
import MockOne from '../../../assets/locationMocks/mockOne.jpg';
import { StyledTopContainer } from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
import Typography from '../../../components/ui-library/Typography';
import { CurrentPostContext } from '../../../contexts/CurrentPostContext';
//TODO:Organize these imports
import {
  BottomContainer,
  HeaderImage,
  HorizontalContainer,
  StyledContainer,
  StyledWhiteBackground,
} from '../Preview/styles';

//TODO: Readd destinations and photo galleries once this is unmocked

export const CurrentPost = ({ navigation }) => {
  const { currentPost } = React.useContext(CurrentPostContext);
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <StyledContainer>
      <StyledTopContainer>
        <Typography onPress={goBack}>X</Typography>
        <Typography bold>Preview</Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 400, width: '100%' }}
      >
        <HeaderImage source={MockOne} />
        <StyledWhiteBackground>
          <Typography header>{currentPost.postTitle}</Typography>
          <Typography>{currentPost.postCaption}</Typography>
          <HorizontalContainer>
            <Typography>{currentPost.username}</Typography>
            <Typography>likes : {currentPost.likes}</Typography>
          </HorizontalContainer>
          <Typography>Image Gallery</Typography>
        </StyledWhiteBackground>
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
