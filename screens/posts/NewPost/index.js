import React, { useContext, useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Container from '../../../components/ui-library/Container';
import Button from '../../../components/ui-library/Button';
import {
  WhiteBackground,
  StyledTopContainer,
  Holder,
} from '../../../components/NewPost';
import { NewPhoto } from '../../../components/ui-library/NewPhoto';
import { NewPostContext } from '../../../contexts/NewPostContext';
import { UserContext } from '../../../contexts/UserContext';
import * as ImagePicker from 'expo-image-picker';
//TODO:Reorganize this
import { GalleryImage, GalleryHolder } from '../Preview/styles';
import { Paths } from '../../../constants/NavigationPaths';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';

const NewPost = ({ navigation }) => {
  const { setNewPostProperty } = useContext(NewPostContext);
  const { user } = useContext(UserContext);
  const [postTitle, setPostTitle] = useState('');
  const [postCaption, setPostCaption] = useState('');
  const [postTag, setPostTag] = useState('');
  const [photos, setPhotos] = useState([]);

  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    if (!result.cancelled) {
      setPhotos(result.selected);
    }
  };

  return (
    <Container>
      <StyledTopContainer>
        <Typography
          style={{ fontWeight: 'bold' }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          X
        </Typography>
        <Typography style={{ fontWeight: 'bold' }}>
          New Post
        </Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <WhiteBackground>
        <Holder>
          <GalleryHolder>
            <NewPhoto
              onPress={() => {
                getCameraPhoto();
              }}
            >
              Add Photo(s)
            </NewPhoto>
            {photos.length
              ? photos.map((photo) => {
                  return (
                    <GalleryImage
                      key={photo.uri}
                      source={{ uri: photo.uri }}
                    />
                  );
                })
              : null}
          </GalleryHolder>

          <SecondaryInput
            label="Title"
            onChangeText={(text) => {
              setPostTitle(text);
            }}
            value={postTitle}
          />
          <SecondaryInput
            label="Caption"
            onChangeText={(text) => {
              setPostCaption(text);
            }}
            value={postCaption}
          />

          <SecondaryInput
            label="Tag"
            onChangeText={(text) => {
              setPostTag(text);
            }}
            value={postTag}
          />
        </Holder>
        <Button
          disabled={
            !postCaption | !postTitle | !postTag | !photos.length
          }
          title={'Next'}
          onPress={() => {
            setNewPostProperty({
              postData: {
                postTitle,
                postCaption,
                postTag,
                photos,
                username: user.username,
                likes: 0,
              },
            });
            navigation.navigate(Paths.adddestination);
          }}
        />
      </WhiteBackground>
    </Container>
  );
};

export default NewPost;
