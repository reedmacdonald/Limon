import React, { useContext, useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Button from '../../../components/ui-library/Button';
import { UserContext } from '../../../contexts/UserContext';
import { Paths } from '../../../constants/NavigationPaths';
import { View } from 'react-native';
import {
  StyledContainer as Container,
  InputHolder,
  ImageHolder,
  StyledProfilePicture,
} from './styles';
import { useImageGallery } from '../../../hooks/useImageGallery';
import { SecondaryInput } from '../../../components/ui-library/SecondaryTextInput';
//Are we using name and Links at all?

const EditUser = ({ navigation }) => {
  const { user, setUserProperty } = useContext(UserContext);
  const [name, setName] = useState(user.name || '');
  const [photo, setPhoto] = useImageGallery({ onePhoto: true });
  const [bio, setBio] = useState(user.bio || '');
  const [username, setUsername] = useState(user.username || '');

  const applyAndGoBack = () => {
    setUserProperty({
      photo: photo || user.photo,
      bio,
      username,
      name,
    });
    navigation.navigate(Paths.userprofile);
  };
  return (
    <Container>
      <ImageHolder>
        <View>
          <StyledProfilePicture
            source={{ uri: photo || user.photo || '' }}
          />
        </View>
        <Typography onPress={setPhoto} green>
          Change profile picture?
        </Typography>
      </ImageHolder>
      <InputHolder>
        <SecondaryInput
          label="Name"
          value={name}
          onChangeText={setName}
        />
        <SecondaryInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <SecondaryInput
          label="Bio"
          value={bio}
          onChangeText={setBio}
        />
        <SecondaryInput label="Links" />
      </InputHolder>
      <Button onPress={applyAndGoBack} title={'Done'} />
    </Container>
  );
};

export default EditUser;
