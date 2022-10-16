import React, { useContext, useState, useEffect } from 'react';
import Container from '../../../components/ui-library/Container';
import InputText from '../../../components/ui-library/TextInput';
import { ProfilePicture } from '../UserProfile/styles';
import Typography from '../../../components/ui-library/Typography';
import Button from '../../../components/ui-library/Button';
import { UserContext } from '../../../contexts/UserContext';
import * as ImagePicker from 'expo-image-picker';
import { Paths } from '../../../constants/NavigationPaths';
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
      <ProfilePicture source={{ uri: photo || user.photo || '' }} />
      <Typography
        onPress={() => {
          getCameraPhoto();
        }}
        green
      >
        {' '}
        Change profile picture?
      </Typography>
      <Typography>Name</Typography>
      <InputText
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        placeholder="Name"
      />
      <Typography>Username</Typography>
      <InputText
        value={username}
        onChangeText={(text) => {
          setUsername(text);
        }}
        placeholder="Username"
      />
      <Typography>Bio</Typography>
      <InputText
        value={bio}
        onChangeText={(text) => {
          setBio(text);
        }}
        placeholder="Bio"
      />
      <Typography>Links</Typography>
      <InputText placeholder="Links" />
      <Button
        onPress={() => {
          applyAndGoBack();
        }}
        title={'Done'}
      />
    </Container>
  );
};

export default EditUser;
