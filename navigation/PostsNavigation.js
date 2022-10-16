import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/posts/Posts';
import NewPost from '../screens/posts/NewPost';
import FavoritePosts from '../screens/posts/FavoritePosts';

const Tab = createBottomTabNavigator();

const PostsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Posts" screenOptions={options}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="NewPosts" component={NewPost} />
      <Tab.Screen name="FavoritePosts" component={FavoritePosts} />
    </Tab.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default PostsNavigation;
