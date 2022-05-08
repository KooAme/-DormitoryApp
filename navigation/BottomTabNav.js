import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import CommunityMain from '../src/CommunityScreens/Main.js';
import SettingMain from '../src/SettingScreens/Main.js';
import Main from '../src/MainScreens/Main';
import CommunityStackNav from './CommunityStackNav.js';
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
        component={CommunityStackNav}
        options={{
          tabBarIcon: () => <Icon name="blackboard" size={30} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingMain}
        options={{
          tabBarIcon: () => <Icon name="grid" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNav;
