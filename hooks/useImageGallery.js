import * as ImagePicker from 'expo-image-picker';
import React from 'react';

export const useImageGallery = ({ onePhoto }) => {
  const [photos, setPhotos] = React.useState(onePhoto ? '' : []);
  const clear = () => {
    setPhotos([]);
  };
  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: onePhoto ? false : true,
      selectionLimit: onePhoto ? 1 : 5,
    });

    if (!result.cancelled) {
      setPhotos(onePhoto ? result.uri : result.selected);
    }
  };
  return [photos, getCameraPhoto, clear];
};
