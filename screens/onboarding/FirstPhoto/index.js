import React from 'react';
import Button from '../../../components/ui-library/Button';
import LongOption from '../../../components/ui-library/LongOption';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';
import { UserContext } from '../../../contexts/UserContext';
import { useImageGallery } from '../../../hooks/useImageGallery';
import { StyledContainer, StyledImage, StyledView } from './styles';

const FirstPhoto = ({ navigation }) => {
  const { setUserProperty } = React.useContext(UserContext);
  const [photo, setPhoto] = useImageGallery({ onePhoto: true });
  const onPressNext = () => {
    setUserProperty({ photo });
    navigation.navigate(Paths.interests);
  };
  const disabled = !!!photo;

  return (
    <StyledContainer>
      {photo && (
        <StyledView>
          <StyledImage source={{ uri: photo }} />
        </StyledView>
      )}
      <Typography header fullWidth>
        Select your first photo for your profile picture
      </Typography>
      <Typography fullWidth>
        Choose a photo to add as a profile picture. You can skip to
        complete later
      </Typography>
      <LongOption onPress={setPhoto} title="Choose a photo" />
      <LongOption title="Add from Instagram" />
      <LongOption title="Add from Facebook" />
      <Button
        disabled={disabled}
        onPress={onPressNext}
        title="Next"
      />
    </StyledContainer>
  );
};

export default FirstPhoto;
