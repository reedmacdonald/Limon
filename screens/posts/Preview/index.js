import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import {
  BlankDestination,
  Destination,
} from '../../../components/Destination';
import {
  StyledTopContainer,
  WhiteBackground,
} from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';
import { CurrentPostContext } from '../../../contexts/CurrentPostContext';
import { NewPostContext } from '../../../contexts/NewPostContext';
import {
  BottomContainer,
  GalleryHolder,
  GalleryImage,
  HeaderImage,
  HorizontalContainer,
  StyledContainer,
} from './styles';

const Preview = ({ navigation }) => {
  const {
    newPost: { postData, destinationData },
  } = useContext(NewPostContext);
  const { setCurrentPostProperty, showNotification } =
    React.useContext(CurrentPostContext);

  const addDestination = () => {
    navigation.navigate(Paths.adddestination);
  };

  const postAndGo = () => {
    setCurrentPostProperty({
      postTitle: postData.postTitle,
      postCaption: postData.postCaption,
      username: postData.username,
      likes: postData.likes,
    });
    showNotification();
    navigation.navigate(Paths.userNavigation, {
      screen: Paths.currentpost,
    });
  };

  return (
    <StyledContainer>
      <StyledTopContainer>
        <Typography onPress={navigation.goBack} bold>
          X
        </Typography>
        <Typography bold>Preview</Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <ScrollView contentContainerStyle={{ paddingBottom: 400 }}>
        <HeaderImage source={{ uri: postData.photos[0].uri }} />
        <WhiteBackground style={{ height: 600 }}>
          <Typography header>{postData.postTitle}</Typography>
          <Typography>{postData.postCaption}</Typography>
          <HorizontalContainer>
            <Typography>{postData.username}</Typography>
            <Typography>likes : {postData.likes}</Typography>
          </HorizontalContainer>
          <Typography>Image Gallery</Typography>
          <GalleryHolder>
            {postData.photos.map(({ uri }) => {
              return <GalleryImage key={uri} source={{ uri }} />;
            })}
          </GalleryHolder>
          <Button title="Done" onPress={postAndGo} />
        </WhiteBackground>
        <BottomContainer>
          <Typography header>Destinations</Typography>
          {destinationData.map(({ destinationTitle, photos }) => {
            return (
              <Destination
                key={destinationTitle}
                photo={photos[0]}
                photos={photos}
                likes={Math.floor(Math.random() * 1000)}
                title={destinationTitle}
                navigation={navigation}
              />
            );
          })}
          <BlankDestination onPress={addDestination} />
        </BottomContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Preview;
