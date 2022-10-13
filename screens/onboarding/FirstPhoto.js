import { Text, Image } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import LongOption from '../../components/LongOption';

const FirstPhoto = ({ navigation }) => {
  const [photo, setPhoto] = React.useState(null);

  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  return (
    <Container>
      <Text>Select your first photo for your profile picture</Text>
      <LongOption
        onPress={() => getCameraPhoto()}
        title="Choose a photo"
      />
      <LongOption title="Add from Instagram" />
      <LongOption title="Add from Facebook" />
      <Button
        onPress={() => navigation.navigate('Interests')}
        title="Next"
      >
        Next
      </Button>
    </Container>
  );
};

export default FirstPhoto;
