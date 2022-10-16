import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProfile } from '../screens/user/UserProfile';
import EditUser from '../screens/user/EditUser';

const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserProfile"
      screenOptions={options}
    >
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditUser" component={EditUser} />
    </Stack.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default UserNavigation;
