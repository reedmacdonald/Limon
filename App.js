import React from 'react';
import OnboardingNavigation from './navigation/OnboardingNavigation';
import { UserContextWrapper } from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserNavigation from './navigation/UserNavigation';
import PostsNavigation from './navigation/PostsNavigation';
import NewPostNavigation from './navigation/NewPostNavigation';
import { NewPostContextWrapper } from './contexts/NewPostContext';
import { CurrentDestinationContextWrapper } from './contexts/CurrentDestinationContext';
import { CurrentPostContextWrapper } from './contexts/CurrentPostContext';
import { SafeAreaView } from 'react-native';
import { Paths } from './constants/NavigationPaths';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextWrapper>
      <NewPostContextWrapper>
        <CurrentDestinationContextWrapper>
          <CurrentPostContextWrapper>
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
          </CurrentPostContextWrapper>
        </CurrentDestinationContextWrapper>
      </NewPostContextWrapper>
    </UserContextWrapper>
  );
}
