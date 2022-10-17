import React, { useContext } from 'react';
import Typography from '../../../components/ui-library/Typography';
import { NewPostContext } from '../../../contexts/NewPostContext';
import { View } from 'react-native';
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
} from './styles';

const Preview = ({ navigation }) => {
  const { newPost } = useContext(NewPostContext);
  React.useEffect(() => {
    console.log(newPost, '<---newPost');
    console.log(newPost.postData.photos, '<---photos');
  }, []);
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
      <HeaderImage
        source={{ uri: newPost.destinationData[0].photos[0].uri }}
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
    </StyledContainer>
  );
};

export default Preview;
