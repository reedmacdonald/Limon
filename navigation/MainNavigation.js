import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Paths } from './constants/NavigationPaths';
import NewPostNavigation from './navigation/NewPostNavigation';
import OnboardingNavigation from './navigation/OnboardingNavigation';
import PostsNavigation from './navigation/PostsNavigation';
import UserNavigation from './navigation/UserNavigation';

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
