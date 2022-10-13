import { Text, Image, Pressable } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import React from 'react';

const Start = ({ navigation }) => {
  return (
    <Container>
      <Image alt="Limon" source={require('../../assets/logo.png')} />
      <Image
        alt="cartoon car"
        source={require('../../assets/car.png')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text>
        Already have an account?{' '}
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={{
              fontWeight: 'bold',
              alignItems: 'center',
              justifyContent: ' center',
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </Text>
    </Container>
  );
};

export default Start;
