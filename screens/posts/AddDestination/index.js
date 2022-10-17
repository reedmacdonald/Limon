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
import * as ImagePicker from 'expo-image-picker';

const AddDestination = ({ navigation }) => {
  const { newPost, setNewPostProperty } = useContext(NewPostContext);
  const [postTitle, setPostTitle] = useState('');
  const [postCaption, setPostCaption] = useState('');
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
          Add Destination
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
        </Holder>
        <Button
          title={'Next'}
          onPress={() => {
            let newDestinationData = [...newPost.destinationData];
            newDestinationData.push({
              postTitle,
              postCaption,
              photos,
            });
            setNewPostProperty({
              destinationData: newDestinationData,
            });
            navigation.navigate('Preview');
          }}
        />
      </WhiteBackground>
    </Container>
  );
};

export default AddDestination;
