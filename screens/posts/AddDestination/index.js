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
import { useImageGallery } from '../../../hooks/useImageGallery';
import { NewPostContext } from '../../../contexts/NewPostContext';
//TODO:Reorganize this
import { GalleryImage, GalleryHolder } from '../Preview/styles';
import { Paths } from '../../../constants/NavigationPaths';

const AddDestination = ({ navigation }) => {
  const { newPost, setNewPostProperty } = useContext(NewPostContext);
  const [destinationTitle, setDestinationTitle] = useState('');
  const [destinationCaption, setDestinationCaption] = useState('');
  const [photos, setPhotos, clearPhotos] = useImageGallery();

  const clear = () => {
    setDestinationCaption('');
    setDestinationTitle('');
    clearPhotos();
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
