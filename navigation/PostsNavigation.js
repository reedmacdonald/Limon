import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/posts/Posts';

const Tab = createBottomTabNavigator();

const PostsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Posts" screenOptions={options}>
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default PostsNavigation;
