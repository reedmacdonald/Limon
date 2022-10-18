import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/onboarding/SignUp';
import Start from '../screens/onboarding/Start';
import SignIn from '../screens/onboarding/SignIn';
import FirstPhoto from '../screens/onboarding/FirstPhoto';
import Interests from '../screens/onboarding/Interests';
import { Paths } from '../constants/NavigationPaths';

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Paths.start}
      screenOptions={options}
    >
      <Stack.Screen name={Paths.start} component={Start} />
      <Stack.Screen name={Paths.signup} component={SignUp} />
      <Stack.Screen name={Paths.signin} component={SignIn} />
      <Stack.Screen name={Paths.firstphoto} component={FirstPhoto} />
      <Stack.Screen name={Paths.interests} component={Interests} />
    </Stack.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default OnboardingNavigation;
