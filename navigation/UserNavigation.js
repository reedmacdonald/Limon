import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Paths } from '../constants/NavigationPaths';
import { CurrentDestination } from '../screens/posts/CurrentDestination';
import { CurrentPost } from '../screens/posts/CurrentPost';
import EditUser from '../screens/user/EditUser';
import { UserProfile } from '../screens/user/UserProfile';

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
      <Stack.Screen
        name={Paths.currentpost}
        component={CurrentPost}
      />
      <Stack.Screen
        name={Paths.currentdestination}
        component={CurrentDestination}
      />
    </Stack.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default UserNavigation;
