import React, { useContext, useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Container from '../../../components/ui-library/Container';
import Button from '../../../components/ui-library/Button';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';
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
import { Paths } from '../../../constants/NavigationPaths';

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
      selectionLimit: 5,
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
              setDestinationTitle(text);
            }}
            value={destinationTitle}
          />
          <SecondaryInput
            label="Caption"
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
            navigation.navigate(Paths.preview);
          }}
        />
      </WhiteBackground>
    </Container>
  );
};

export default AddDestination;
