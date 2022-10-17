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
//TODO:Reorganize this
import { GalleryImage, GalleryHolder } from '../Preview/styles';

const AddDestination = ({ navigation }) => {
  const { newPost, setNewPostProperty } = useContext(NewPostContext);
  const [destinationTitle, setDestinationTitle] = useState('');
  const [destinationCaption, setDestinationCaption] = useState('');
  const [photos, setPhotos] = useState([]);

  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 6,
    });

    if (!result.cancelled) {
      setPhotos(result.selected);
    }
  };

  const clear = () => {
    setDestinationCaption('');
    setDestinationTitle('');
    setPhotos([]);
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
          {photos.length ? (
            <GalleryHolder>
              {photos.map((photo) => {
                return (
                  <GalleryImage
                    key={photo.uri}
                    source={{ uri: photo.uri }}
                  />
                );
              })}
            </GalleryHolder>
          ) : null}
          <Typography>Title</Typography>
          <InputText
            onChangeText={(text) => {
              setDestinationTitle(text);
            }}
            value={destinationTitle}
          />
          <Typography>Caption</Typography>
          <InputText
            onChangeText={(text) => {
              setDestinationCaption(text);
            }}
            value={destinationCaption}
          />
        </Holder>
        <Button
          title={'Next'}
          onPress={() => {
            let newDestinationData = [...newPost.destinationData];
            newDestinationData.push({
              destinationTitle,
              destinationCaption,
              photos,
            });
            setNewPostProperty({
              destinationData: newDestinationData,
            });
            clear();
            navigation.navigate('Preview');
          }}
        />
      </WhiteBackground>
    </Container>
  );
};

export default AddDestination;
