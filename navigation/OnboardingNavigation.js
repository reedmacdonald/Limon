import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/onboarding/SignUp';
import Start from '../screens/onboarding/Start';
import SignIn from '../screens/onboarding/SignIn';
import FirstPhoto from '../screens/onboarding/FirstPhoto';
import Interests from '../screens/onboarding/Interests';

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={options}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="FirstPhoto" component={FirstPhoto} />
        <Stack.Screen name="Interests" component={Interests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const options = {
  headerShown: false,
};

export default OnboardingNavigation;
