import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewPost from '../screens/posts/NewPost';
import { UserContext } from '../contexts/UserContext';
import AddDestination from '../screens/posts/AddDestination';
import Preview from '../screens/posts/Preview';

const Tab = createBottomTabNavigator();

const NewPostNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <Tab.Navigator
      initialRouteName="NewPost"
      screenOptions={{
        tabBarStyle: { display: 'none' },
        headerShown: false,
      }}
    >
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="AddDestination" component={AddDestination} />
      <Tab.Screen name="Preview" component={Preview} />
    </Tab.Navigator>
  );
};

export default NewPostNavigation;
