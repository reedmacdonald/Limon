import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import LongOption from '../../../components/ui-library/LongOption';
import Typography from '../../../components/ui-library/Typography';
import { UserContext } from '../../../contexts/UserContext';
import { Paths } from '../../../constants/NavigationPaths';

const FirstPhoto = ({ navigation }) => {
  const [photo, setPhoto] = React.useState(null);
  const { setUserProperty } = React.useContext(UserContext);

  const getCameraPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  return (
    <Container>
      <Typography header>
        Select your first photo for your profile picture
      </Typography>
      <Typography>
        Choose a photo to add as a profile picture. You can skip to
        complete later
      </Typography>
      <LongOption
        onPress={() => getCameraPhoto()}
        title="Choose a photo"
      />
      <LongOption title="Add from Instagram" />
      <LongOption title="Add from Facebook" />
      <Button
        onPress={() => {
          setUserProperty({ photo });
          navigation.navigate(Paths.interests);
        }}
        title="Next"
      />
    </Container>
  );
};

export default FirstPhoto;
