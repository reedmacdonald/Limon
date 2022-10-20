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
import { useImageGallery } from '../../../hooks/useImageGallery';
//TODO:Reorganize this
import { GalleryHolder, GalleryImage } from '../Preview/styles';

const AddDestination = ({ navigation }) => {
  const { newPost, setNewPostProperty } = useContext(NewPostContext);
  const [destinationTitle, setDestinationTitle] = useState('');
  const [destinationCaption, setDestinationCaption] = useState('');
  const [photos, setPhotos, clearPhotos] = useImageGallery({
    onePhoto: false,
  });

  const clear = () => {
    setDestinationCaption('');
    setDestinationTitle('');
    clearPhotos();
  };

  const setDestinationAndGo = () => {
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
  };

  return (
    <Container>
      <StyledTopContainer>
        <Typography onPress={navigation.goBack}>X</Typography>
        <Typography bold>Add Destination</Typography>
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
            onChangeText={setDestinationTitle}
            value={destinationTitle}
          />
          <SecondaryInput
            label="Caption"
            onChangeText={setDestinationCaption}
            value={destinationCaption}
          />
        </Holder>
        <Button title={'Next'} onPress={setDestinationAndGo} />
      </WhiteBackground>
    </Container>
  );
};

export default AddDestination;
