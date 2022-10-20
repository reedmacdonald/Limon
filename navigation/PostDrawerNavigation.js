import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Colors } from '../constants/Colors';
import Posts from '../screens/posts/Posts';

const Drawer = createDrawerNavigator();

export const PostDrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="All"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveTintColor: Colors.charcoal,
        drawerItemStyle: {
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: Colors.limeGreen,
        },
      }}
    >
      <Drawer.Screen
        name="Dining"
        component={Posts}
        initialParams={{ category: 'Dining' }}
      />
      <Drawer.Screen
        name="Drinks"
        component={Posts}
        initialParams={{ category: 'Drinks' }}
      />

      <Drawer.Screen
        name="Outdoor activities"
        component={Posts}
        initialParams={{ category: 'Outdoor activities' }}
      />
      <Drawer.Screen
        name="Entertainment"
        component={Posts}
        initialParams={{ category: 'Entertainment' }}
      />
      <Drawer.Screen
        name="Events"
        component={Posts}
        initialParams={{ category: 'Events' }}
      />
      <Drawer.Screen
        name="Recreation"
        component={Posts}
        initialParams={{ category: 'Recreation' }}
      />
      <Drawer.Screen
        name="Sports"
        component={Posts}
        initialParams={{ category: 'Sports' }}
      />
      <Drawer.Screen
        name="Other"
        component={Posts}
        initialParams={{ category: 'Other' }}
      />
      <Drawer.Screen
        name="All"
        component={Posts}
        initialParams={{ category: 'All' }}
      />
    </Drawer.Navigator>
  );
};
