import React from 'react';
import OnboardingNavigation from './navigation/OnboardingNavigation';
import { UserContextWrapper } from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProfile } from './screens/user/UserProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextWrapper>
      <NavigationContainer>
        <Stack.Navigator
          initialRoute={'OnboardingNavigation'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={'OnboardingNavigation'}
            component={OnboardingNavigation}
          />
          <Stack.Screen
            name={'UserProfile'}
            component={UserProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextWrapper>
  );
}
