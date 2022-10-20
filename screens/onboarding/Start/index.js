import React from 'react';
import { Logo } from '../../../components/ui-library/LimonLogo';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import { Paths } from '../../../constants/NavigationPaths';
import Typography from '../../../components/ui-library/Typography';
import { StyledPressable, StyledImage } from './styles';

const Start = ({ navigation }) => {
  const goToSignIn = () => navigation.navigate(Paths.signin);
  const goToSignUp = () => navigation.navigate(Paths.signup);

  return (
    <Container>
      <Logo />
      <StyledImage
        alt="cartoon car"
        resizeMode="cover"
        source={require('../../../assets/car.png')}
      />
      <Button title="Sign Up" onPress={goToSignUp} />
      <StyledPressable onPress={goToSignIn}>
        <Typography>
          Already have an account?{' '}
          <Typography bold>Sign In</Typography>
        </Typography>
      </StyledPressable>
    </Container>
  );
};

export default Start;
