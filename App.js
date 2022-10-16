import React from 'react';
import OnboardingNavigation from './navigation/OnboardingNavigation';
import { UserContextWrapper } from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserNavigation from './navigation/UserNavigation';
import PostsNavigation from './navigation/PostsNavigation';
import { useFonts } from 'expo-font';

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
            name={'UserNavigation'}
            component={UserNavigation}
          />
          <Stack.Screen
            name={'PostsNavigation'}
            component={PostsNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextWrapper>
  );
}
