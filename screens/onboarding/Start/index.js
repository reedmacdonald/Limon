import {
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import React from 'react';
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
