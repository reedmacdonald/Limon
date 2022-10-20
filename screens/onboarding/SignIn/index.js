import React from 'react';
import { Text } from 'react-native';
import { BackgroundImage } from '../../../components/ui-library/BackgroundImage';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import Form from '../../../components/ui-library/Form';
import InputText from '../../../components/ui-library/TextInput';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <BackgroundImage />
      <Form>
        <Typography>Sign In</Typography>
        <InputText placeholder="Username or Email"></InputText>
        <InputText secureTextEntry placeholder="Password"></InputText>
        <Button
          title="Next"
          onPress={() => navigation.navigate(Paths.firstphoto)}
        />
        <Text>Forgot Password?</Text>
      </Form>
    </Container>
  );
};

export default SignIn;
