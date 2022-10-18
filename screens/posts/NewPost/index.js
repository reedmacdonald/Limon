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
//TODO:Reorganize this
import { GalleryImage, GalleryHolder } from '../Preview/styles';
import { Paths } from '../../../constants/NavigationPaths';
import { useImageGallery } from '../../../hooks/useImageGallery';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';

const NewPost = ({ navigation }) => {
  const { setNewPostProperty } = useContext(NewPostContext);
  const { user } = useContext(UserContext);
  const [postTitle, setPostTitle] = useState('');
  const [postCaption, setPostCaption] = useState('');
  const [postTag, setPostTag] = useState('');
  const [photos, setPhotos] = useImageGallery();

  return (
    <Container>
      <StyledTopContainer>
        <Typography
          bold
          onPress={() => {
            navigation.goBack();
          }}
        >
          X
        </Typography>
        <Typography bold>New Post</Typography>
        <Typography green>Next</Typography>
      </StyledTopContainer>
      <WhiteBackground>
        <Holder>
          <GalleryHolder>
            <NewPhoto onPress={setPhotos}>Add Photo(s)</NewPhoto>
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
            onChangeText={setPostTitle}
            value={postTitle}
          />
          <SecondaryInput
            label="Caption"
            onChangeText={setPostCaption}
            value={postCaption}
          />

          <SecondaryInput
            label="Tag"
            onChangeText={setPostTag}
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
