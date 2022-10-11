import { Text, View, Pressable } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import React from 'react';

const SignUp = ({ navigation }) => {
  return (
    <Container>
      <Text>Sign Up</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Container>
  );
};

export default SignUp;
