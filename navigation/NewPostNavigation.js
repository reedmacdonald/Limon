import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { Paths } from '../constants/NavigationPaths';
import { UserContext } from '../contexts/UserContext';
import AddDestination from '../screens/posts/AddDestination';
import NewPost from '../screens/posts/NewPost';
import Preview from '../screens/posts/Preview';

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
