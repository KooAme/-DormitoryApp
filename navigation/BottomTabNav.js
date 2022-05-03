import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import CommunityMain from '../src/CommunityScreens/Main.js';
import Main from '../src/MainScreens/Main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    //BOTTOM TAB NAVIGATION
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HOME"
        component={Main}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="게시판"
        component={CommunityMain}
        options={{
          tabBarIcon: () => <Icon name="blackboard" size={30} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CommunityMain}
        options={{
          tabBarIcon: () => <Icon name="grid" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNav;
