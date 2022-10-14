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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email address"
        ></InputText>
        <InputText
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="Phone number"
        ></InputText>
        <InputText
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        ></InputText>
        <InputText
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
