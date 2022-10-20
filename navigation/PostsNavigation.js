import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { Paths } from '../constants/NavigationPaths';
import { UserContext } from '../contexts/UserContext';
import FavoritePosts from '../screens/posts/FavoritePosts';
import Notifications from '../screens/user/Notifications';
import { UserProfile } from '../screens/user/UserProfile';
import NewPostNavigation from './NewPostNavigation';
import { PostDrawerNavigation } from './PostDrawerNavigation';
//TODO : Figure out why Profile Picture isnt't working

const Tab = createBottomTabNavigator();

const PostsNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <Tab.Navigator
      initialRouteName={Paths.posts}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === Paths.posts) {
            iconName = 'ios-search';
          }
          if (route.name === Paths.newPostNavigation) {
            iconName = 'add-circle-outline';
          }
          if (route.name === Paths.favoriteposts) {
            iconName = 'bookmark-outline';
          }
          if (route.name === Paths.notifications) {
            iconName = 'md-notifications-outline';
          }
          if (route.name === Paths.userprofile) {
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

        tabBarActiveTintColor: Colors.limeGreen,
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle:
          route.name == Paths.newPostNavigation
            ? { display: 'none' }
            : null,
      })}
    >
      <Tab.Screen
        name={Paths.posts}
        component={PostDrawerNavigation}
      />
      <Tab.Screen
        name={Paths.favoriteposts}
        component={FavoritePosts}
      />
      <Tab.Screen
        name={Paths.newPostNavigation}
        component={NewPostNavigation}
      />
      <Tab.Screen
        name={Paths.notifications}
        component={Notifications}
      />
      <Tab.Screen name={Paths.userprofile} component={UserProfile} />
    </Tab.Navigator>
  );
};

export default PostsNavigation;
