import React, { useContext } from 'react';
import Typography from '../../../components/ui-library/Typography';
import { NewPostContext } from '../../../contexts/NewPostContext';
import { View, ScrollView } from 'react-native';
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
} from './styles';
import {
  Destination,
  BlankDestination,
} from '../../../components/Destination';

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
        <Typography style={{ fontWeight: 'bold' }}>
          Preview
        </Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        <HeaderImage
          source={{ uri: newPost.postData.photos[0].uri }}
        />
        <WhiteBackground>
          <Typography header>{newPost.postData.postTitle}</Typography>
          <Typography>{newPost.postData.postCaption}</Typography>
          <View>
            <Typography>{newPost.postData.username}</Typography>
            <Typography>{newPost.postData.likes}</Typography>
          </View>
          <Typography>Image Gallery</Typography>
          <GalleryHolder>
            {newPost.postData.photos.map(({ uri }) => {
              return <GalleryImage source={{ uri }} />;
            })}
          </GalleryHolder>
          <Button title="Done" />
        </WhiteBackground>
        <BottomContainer>
          <Typography header>Destinations</Typography>
          {newPost.destinationData.map((value) => {
            return (
              <Destination
                photo={value.photos[0]}
                likes={Math.floor(Math.random() * 1000)}
                title={value.destinationTitle}
              />
            );
          })}
          <BlankDestination />
        </BottomContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Preview;
