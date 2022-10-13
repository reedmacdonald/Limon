import { Text } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import InputText from '../../components/TextInput';
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <BackgroundImage
        alt="lemon pattern"
        source={require('../../assets/backgroundArt.png')}
      />
      <Form>
        <Text>Sign In</Text>
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
