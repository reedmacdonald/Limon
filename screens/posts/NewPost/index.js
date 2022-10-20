import React, { useContext, useState } from 'react';
import {
  Holder,
  StyledTopContainer,
  WhiteBackground,
} from '../../../components/NewPost';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import { NewPhoto } from '../../../components/ui-library/NewPhoto';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';
import { NewPostContext } from '../../../contexts/NewPostContext';
import { UserContext } from '../../../contexts/UserContext';
import { useImageGallery } from '../../../hooks/useImageGallery';
//TODO:Reorganize this
import { GalleryHolder, GalleryImage } from '../Preview/styles';

const NewPost = ({ navigation }) => {
  const { setNewPostProperty } = useContext(NewPostContext);
  const { user } = useContext(UserContext);
  const [postTitle, setPostTitle] = useState('');
  const [postCaption, setPostCaption] = useState('');
  const [postTag, setPostTag] = useState('');
  const [photos, setPhotos] = useImageGallery({ onePhoto: false });

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
