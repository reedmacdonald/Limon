import React, { useContext, useState } from 'react';
import { ProfilePicture } from '../UserProfile/styles';
import Typography from '../../../components/ui-library/Typography';
import Button from '../../../components/ui-library/Button';
import { UserContext } from '../../../contexts/UserContext';
import * as ImagePicker from 'expo-image-picker';
import { Paths } from '../../../constants/NavigationPaths';
import {
  StyledContainer as Container,
  InputHolder,
  StyledInputText as InputText,
  ImageHolder,
} from './styles';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';
//Are we using name and Links at all?

const EditUser = ({ navigation }) => {
  const { user, setUserProperty } = useContext(UserContext);
  const [name, setName] = useState(user.name || '');
  const [photo, setPhoto] = useState(user.photo || '');
  const [bio, setBio] = useState(user.bio || '');
  const [username, setUsername] = useState(user.username || '');

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
  const applyAndGoBack = () => {
    setUserProperty({ photo, bio, username, name });
    navigation.navigate(Paths.userprofile);
  };
  return (
    <Container>
      <ImageHolder>
        <ProfilePicture source={{ uri: photo || user.photo || '' }} />
        <Typography onPress={getCameraPhoto} green>
          Change profile picture?
        </Typography>
      </ImageHolder>
      <InputHolder>
        <SecondaryInput
          label="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <SecondaryInput
          label="Username"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <SecondaryInput
          label="Bio"
          value={bio}
          onChangeText={(text) => {
            setBio(text);
          }}
        />
        <InputText label="Links" />
      </InputHolder>
      <Button onPress={applyAndGoBack} title={'Done'} />
    </Container>
  );
};

export default EditUser;
