import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import { Paths } from '../../../constants/NavigationPaths';

const Start = ({ navigation }) => {
  return (
    <Container>
      <Image
        alt="Limon"
        source={require('../../../assets/logo.png')}
      />
      <Image
        alt="cartoon car"
        style={{
          position: 'relative',
          width: '100%',
          height: 300,
        }}
        resizeMode="cover"
        source={require('../../../assets/car.png')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(Paths.signup)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(Paths.signin)}
        style={{ display: 'inline', marginTop: 10 }}
      >
        <Text>
          Already have an account?{' '}
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            Sign In
          </Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Start;
