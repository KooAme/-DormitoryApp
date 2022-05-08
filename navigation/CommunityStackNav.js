import React from 'react';
import Main from '../src/CommunityScreens/Main';
import Details from '../src/CommunityScreens/Details';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function CommunityStackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CommunityMain" component={Main}></Stack.Screen>
      <Stack.Screen name="CommunityDetails" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
export default CommunityStackNav;
