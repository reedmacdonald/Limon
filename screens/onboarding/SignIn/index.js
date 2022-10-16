import { Text } from 'react-native';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import Form from '../../../components/ui-library/Form';
import InputText from '../../../components/ui-library/TextInput';
import React from 'react';
import BackgroundImage from '../../../components/ui-library/BackgroundImage';
import Typography from '../../../components/ui-library/Typography';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <BackgroundImage
        alt="lemon pattern"
        source={require('../../../assets/backgroundArt.png')}
        style={{ height: 180 }}
      />
      <Form>
        <Typography>Sign In</Typography>
        <InputText placeholder="Username or Email"></InputText>
        <InputText placeholder="Password"></InputText>
        <Button
          title="Next"
          onPress={() => navigation.navigate('FirstPhoto')}
        />
        <Text>Forgot Password?</Text>
      </Form>
    </Container>
  );
};

export default SignIn;
