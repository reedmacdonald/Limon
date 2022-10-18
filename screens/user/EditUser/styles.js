import styled from 'styled-components/native';
import { Colors } from '../../../constants/Colors';
import Container from '../../../components/ui-library/Container';
import InputText from '../../../components/ui-library/TextInput';
import { ProfilePicture } from '../UserProfile/styles';

export const StyledContainer = styled(Container)`
  background-color: ${Colors.white};
  padding-horizontal: 20px;
  width: 100%;
`;

export const InputHolder = styled.View`
  align-items: start;
  width: 100%;
`;

export const StyledInputText = styled(InputText)`
  width: 100%;
`;

export const ImageHolder = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledProfilePicture = styled(ProfilePicture)`
  position: relative;
  top: 0;
  left: auto;
  right: auto;
  margin-bottom: 10px;
`;
