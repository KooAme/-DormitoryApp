import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import {Avatar} from 'react-native-paper';
function SettingMain({navigation}) {
  return (
    <>
      <AppHeader title={'Setting'} navigation={navigation}></AppHeader>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image
            source={require('../public/annonymous.png')}
            size={130}></Avatar.Image>
          <Text style={{color: 'black'}}>신민규</Text>
        </View>
        <TouchableOpacity
          style={{
            height: '10%',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', marginLeft: '10%'}}>다크모드</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '10%',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', marginLeft: '10%'}}>언어설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '10%',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', marginLeft: '10%'}}>Version</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default SettingMain;
