import { Text, Image, View } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import InputText from '../../components/TextInput';
import React from 'react';
import { Colors } from '../../constants/Colors';

const SignUp = ({ navigation }) => {
  return (
    <Container>
      <Image
        style={{
          backgroundColor: Colors.pistachio,
          borderColor: 'red',
          borderWidth: 0,
          position: 'relative',
          width: '100%',
          top: -10,
        }}
        alt="Limon"
        source={require('../../assets/backgroundArt.png')}
      />
      <Form>
        <Text>Let's Get Started</Text>
        <Text>Create an account to start using Limon</Text>
        <InputText placeholder="Email address"></InputText>
        <InputText placeholder="Phone number"></InputText>
        <InputText placeholder="Username"></InputText>
        <InputText placeholder="Password"></InputText>
        <InputText placeholder="Re-enter password"></InputText>
        <View>
          <Text>By creating our Terms of Service</Text>
        </View>
        <Button
          title="Next"
          onPress={() => navigation.navigate('SignIn')}
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
