import React, { useContext, useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Container from '../../../components/ui-library/Container';
import Button from '../../../components/ui-library/Button';
import InputText from '../../../components/ui-library/TextInput';
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
    });

    if (!result.cancelled) {
      setPhotos(result.selected);
    }
  };

  return (
    <Container>
      <StyledTopContainer>
        <Typography
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
          <NewPhoto
            onPress={() => {
              getCameraPhoto();
            }}
          >
            Add Photo(s)
          </NewPhoto>
          {photos.length ? (
            <GalleryHolder>
              {photos.map(({ uri }) => {
                return <GalleryImage style={{ uri }} />;
              })}
            </GalleryHolder>
          ) : null}
          <Typography>Title</Typography>
          <InputText
            onChangeText={(text) => {
              setPostTitle(text);
            }}
            value={postTitle}
          />
          <Typography>Caption</Typography>
          <InputText
            onChangeText={(text) => {
              setPostCaption(text);
            }}
            value={postCaption}
          />
          <Typography>Tag</Typography>
          <InputText
            onChangeText={(text) => {
              setPostTag(text);
            }}
            value={postTag}
          />
        </Holder>
        <Button
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
            navigation.navigate('AddDestination');
          }}
        />
      </WhiteBackground>
    </Container>
  );
};

export default NewPost;
