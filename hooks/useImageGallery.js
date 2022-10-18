import React from 'react';
import * as ImagePicker from 'expo-image-picker';

export const useImageGallery = (options) => {
  const [photos, setPhotos] = React.useState([]);
  const clear = () => {
    setPhotos([]);
  };
  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: options.onePhoto ? false : true,
      selectionLimit: options.onePhoto ? 1 : 5,
    });

    if (!result.cancelled) {
      setPhotos(options.onePhoto ? result.uri : result.selected);
    }
  };
  return [photos, getCameraPhoto, clear];
};
