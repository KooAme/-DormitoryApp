import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import MealSwiper from '../Custom/MealSwiper';
import {Avatar} from 'react-native-paper';

function Main(props) {
  const grid = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    element: {
      height: '50%',
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {marginTop: '1%', height: '60%', width: '40%', resizeMode: 'cover'},
  });
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <AppHeader
        navigation={props.navigation}
        title={'Global Campus'}
        isLeft={false}></AppHeader>
      {/*HEADER*/}
      <MealSwiper></MealSwiper>
      {/*식사SWIPER*/}
      <View style={grid.container}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('BusInquery');
          }}>
          <View style={grid.element}>
            <Text
              style={{
                color: '#0067A3',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              스쿨 버스
            </Text>
            <Avatar.Image
              source={require('../public/shuttleBus.png')}
              style={{backgroundColor: 'white'}}
              size={120}></Avatar.Image>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('OutInquery');
          }}>
          <View style={grid.element}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              외박
            </Text>
            <Avatar.Image
              source={require('../public/sotobaku.png')}
              style={{backgroundColor: 'white'}}
              size={120}></Avatar.Image>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('GymInquery');
          }}>
          <View style={grid.element}>
            <Text
              style={{
                color: 'orange',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              헬스
            </Text>
            <Avatar.Image
              source={require('../public/health.png')}
              style={{backgroundColor: 'white'}}
              size={120}></Avatar.Image>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('ASInquery');
          }}>
          <View style={grid.element}>
            <Text
              style={{
                color: 'navy',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              A/S
            </Text>
            <Avatar.Image
              source={require('../public/AS.png')}
              style={{backgroundColor: 'white'}}
              size={120}></Avatar.Image>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
export default Main;
