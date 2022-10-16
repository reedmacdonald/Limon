import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/posts/Posts';
import NewPost from '../screens/posts/NewPost';
import FavoritePosts from '../screens/posts/FavoritePosts';
import Notifications from '../screens/user/Notifications';
import { UserProfile } from '../screens/user/UserProfile';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../contexts/UserContext';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const PostsNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Posts') {
            iconName = 'ios-search';
          }
          if (route.name === 'NewPosts') {
            iconName = 'add-circle-outline';
          }
          if (route.name === 'FavoritePosts') {
            iconName = 'bookmark-outline';
          }
          if (route.name === 'Notifications') {
            iconName = 'md-notifications-outline';
          }
          if (route.name === 'UserProfile') {
            return (
              <Image
                source={{ uri: user.photo }}
                style={{ height: 30, width: 30, borderRadius: 15 }}
              />
            );
          }

          return (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="FavoritePosts" component={FavoritePosts} />
      <Tab.Screen name="NewPosts" component={NewPost} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const options = {
  headerShown: false,
};

export default PostsNavigation;
