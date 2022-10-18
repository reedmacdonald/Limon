import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProfile } from '../screens/user/UserProfile';
import EditUser from '../screens/user/EditUser';
import { Paths } from '../constants/NavigationPaths';

const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Paths.userprofile}
      screenOptions={options}
    >
      <Stack.Screen
        name={Paths.userprofile}
        component={UserProfile}
      />
      <Stack.Screen name={Paths.edituser} component={EditUser} />
    </Stack.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default UserNavigation;
