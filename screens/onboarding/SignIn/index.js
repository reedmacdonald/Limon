import React, { useState } from 'react';
import { Text } from 'react-native';
import { BackgroundImage } from '../../../components/ui-library/BackgroundImage';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import Form from '../../../components/ui-library/Form';
import InputText from '../../../components/ui-library/TextInput';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';

const SignIn = ({ navigation }) => {
  const goToPhoto = () => navigation.navigate(Paths.firstphoto);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <BackgroundImage />
      <Form>
        <Typography>Sign In</Typography>
        <InputText
          placeholder="Username or Email"
          value={username}
          onChangeText={setUsername}
        />
        <InputText
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Next" onPress={goToPhoto} />
        <Text>Forgot Password?</Text>
      </Form>
    </Container>
  );
};

export default SignIn;
