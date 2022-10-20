import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthContextWrapper } from './contexts/AuthContext';
import { CurrentDestinationContextWrapper } from './contexts/CurrentDestinationContext';
import { CurrentPostContextWrapper } from './contexts/CurrentPostContext';
import { NewPostContextWrapper } from './contexts/NewPostContext';
import { UserContextWrapper } from './contexts/UserContext';
import { MainNavigation } from './navigation/MainNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextWrapper>
      <NewPostContextWrapper>
        <CurrentDestinationContextWrapper>
          <CurrentPostContextWrapper>
            <AuthContextWrapper>
              <MainNavigation />
            </AuthContextWrapper>
          </CurrentPostContextWrapper>
        </CurrentDestinationContextWrapper>
      </NewPostContextWrapper>
    </UserContextWrapper>
  );
}
