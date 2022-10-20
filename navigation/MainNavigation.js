import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Paths } from '../constants/NavigationPaths';
import NewPostNavigation from './NewPostNavigation';
import OnboardingNavigation from './OnboardingNavigation';
import PostsNavigation from './PostsNavigation';
import UserNavigation from './UserNavigation';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute={Paths.onboardingNavigation}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={Paths.onboardingNavigation}
          component={OnboardingNavigation}
        />
        <Stack.Screen
          name={Paths.userNavigation}
          component={UserNavigation}
        />
        <Stack.Screen
          name={Paths.postsNavigation}
          component={PostsNavigation}
        />
        <Stack.Screen
          name={Paths.newPostNavigation}
          component={NewPostNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
