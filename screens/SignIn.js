import { Text, Image } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import React from 'react';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <Image alt="Limon" source={require('../assets/logo.png')} />
      <Image
        alt="cartoon car"
        source={require('../assets/car.png')}
      />
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text>
        Already have an account?{' '}
        <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
      </Text>
    </Container>
  );
};

export default SignIn;
