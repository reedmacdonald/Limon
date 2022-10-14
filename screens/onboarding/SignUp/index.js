import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Form from '../../../components/Form';
import InputText from '../../../components/TextInput';
import React, { useState, useContext } from 'react';
import BackgroundImage from '../../../components/BackgroundImage';
import Typography from '../../../components/Typography';
import { UserContext } from '../../../contexts/UserContext';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserProperty } = useContext(UserContext);
  return (
    <Container>
      <BackgroundImage
        alt="lemon pattern"
        source={require('../../../assets/backgroundArt.png')}
      />
      <Form>
        <View style={{ alignSelf: 'flex-start' }}>
          <Typography header>Let's Get Started</Typography>
          <Typography>
            Create an account to start using Limon
          </Typography>
        </View>
        <InputText
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Email address"
        ></InputText>
        <InputText
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          placeholder="Phone number"
        ></InputText>
        <InputText
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
          placeholder="Username"
        ></InputText>
        <InputText
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
        ></InputText>
        <InputText placeholder="Re-enter password"></InputText>
        <View>
          <Text>By agreeing to our Terms of Service</Text>
        </View>
        <Button
          title="Next"
          onPress={() => {
            setUserProperty({
              username,
              password,
              phoneNumber,
              email,
            });
            navigation.navigate('FirstPhoto');
          }}
        />
        <Text>
          Already have an account?{' '}
          <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
        </Text>
      </Form>
    </Container>
  );
};

export default SignUp;
