import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewPost from '../screens/posts/NewPost';
import { UserContext } from '../contexts/UserContext';
import AddDestination from '../screens/posts/AddDestination';
import Preview from '../screens/posts/Preview';
import { Paths } from '../constants/NavigationPaths';

const Tab = createBottomTabNavigator();

const NewPostNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <Tab.Navigator
      initialRouteName={Paths.newpost}
      screenOptions={{
        tabBarStyle: { display: 'none' },
        headerShown: false,
      }}
    >
      <Tab.Screen name={Paths.newpost} component={NewPost} />
      <Tab.Screen
        name={Paths.adddestination}
        component={AddDestination}
      />
      <Tab.Screen name={Paths.preview} component={Preview} />
    </Tab.Navigator>
  );
};

export default NewPostNavigation;
