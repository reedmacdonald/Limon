import React, { useContext } from 'react';
import Typography from '../../../components/ui-library/Typography';
import { NewPostContext } from '../../../contexts/NewPostContext';
import { ScrollView } from 'react-native';
import {
  StyledTopContainer,
  WhiteBackground,
} from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
import {
  HeaderImage,
  GalleryHolder,
  GalleryImage,
  StyledContainer,
  BottomContainer,
  HorizontalContainer,
} from './styles';
import {
  Destination,
  BlankDestination,
} from '../../../components/Destination';
import { Paths } from '../../../constants/NavigationPaths';

const Preview = ({ navigation }) => {
  const { newPost } = useContext(NewPostContext);

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
        <HeaderImage
          source={{ uri: newPost.postData.photos[0].uri }}
        />
        <WhiteBackground style={{ height: 600 }}>
          <Typography header>{newPost.postData.postTitle}</Typography>
          <Typography>{newPost.postData.postCaption}</Typography>
          <HorizontalContainer>
            <Typography>{newPost.postData.username}</Typography>
            <Typography>likes : {newPost.postData.likes}</Typography>
          </HorizontalContainer>
          <Typography>Image Gallery</Typography>
          <GalleryHolder>
            {newPost.postData.photos.map(({ uri }) => {
              return <GalleryImage key={uri} source={{ uri }} />;
            })}
          </GalleryHolder>
          <Button title="Done" />
        </WhiteBackground>
        <BottomContainer>
          <Typography header>Destinations</Typography>
          {newPost.destinationData.map((value) => {
            return (
              <Destination
                key={value.destinationTitle}
                photo={value.photos[0]}
                likes={Math.floor(Math.random() * 1000)}
                title={value.destinationTitle}
                navigation={navigation}
              />
            );
          })}
          <BlankDestination
            onPress={() => {
              navigation.navigate(Paths.adddestination);
            }}
          />
        </BottomContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Preview;
