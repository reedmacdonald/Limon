import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import React from 'react';
import LongOption from '../../../components/ui-library/LongOption';
import Typography from '../../../components/ui-library/Typography';
import { UserContext } from '../../../contexts/UserContext';
import { Paths } from '../../../constants/NavigationPaths';
import { useImageGallery } from '../../../hooks/useImageGallery';

const FirstPhoto = ({ navigation }) => {
  const { setUserProperty } = React.useContext(UserContext);
  const [photo, setPhoto] = useImageGallery({ onePhoto: true });

  return (
    <Container style={{ paddingHorizontal: 20 }}>
      <Typography header>
        Select your first photo for your profile picture
      </Typography>
      <Typography>
        Choose a photo to add as a profile picture. You can skip to
        complete later
      </Typography>
      <LongOption onPress={setPhoto} title="Choose a photo" />
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
