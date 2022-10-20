import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { BackgroundImage } from '../../../components/ui-library/BackgroundImage';
import Button from '../../../components/ui-library/Button';
import Container from '../../../components/ui-library/Container';
import Form from '../../../components/ui-library/Form';
import InputText from '../../../components/ui-library/TextInput';
import Typography from '../../../components/ui-library/Typography';
import { Paths } from '../../../constants/NavigationPaths';
import { UserContext } from '../../../contexts/UserContext';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserProperty } = useContext(UserContext);
  const onPressNext = () => {
    setUserProperty({
      username,
      password,
      phoneNumber,
      email,
    });
    navigation.navigate(Paths.firstphoto);
  };

  const onPressSignIn = () => {
    navigation.navigate(Paths.signin);
  };

  return (
    <Container>
      <BackgroundImage />
      <Form>
        <View>
          <Typography header>Let's Get Started</Typography>
          <Typography>
            Create an account to start using Limon
          </Typography>
        </View>
        <InputText
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
        ></InputText>
        <InputText
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone number"
        ></InputText>
        <InputText
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        ></InputText>
        <InputText
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        ></InputText>
        <InputText
          secureTextEntry
          placeholder="Re-enter password"
        ></InputText>
        <View>
          <Text>By agreeing to our Terms of Service</Text>
        </View>
        <Button title="Next" onPress={onPressNext} />
        <Text>
          Already have an account? <Text bold>Sign In</Text>
        </Text>
      </Form>
    </Container>
  );
};

export default SignUp;
