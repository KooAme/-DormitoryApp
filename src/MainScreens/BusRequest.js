import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../Custom/CustomButton';
function BusRequest(props) {
  const font = StyleSheet.create({
    title: {
      height: '100%',
      color: 'black',
      fontWeight: '900',
    },
  });
  const box = StyleSheet.create({
    containers: {
      height: '20%',
      width: '100%',
      marginTop: '5%',
      flexDirection: 'column',
    },
    place: {
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    time: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'버스예약'}
        isLeft={true}></AppHeader>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '20%',
            width: '100%',
            marginTop: '10%',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '20%',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={font.title}>출발</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={font.title}>운암역방면</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={font.title}>도착</Text>
            </View>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', backgroundColor: 'black'}}>
            <View
              style={{
                backgroundColor: 'green',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{width: '50%', height: '50%', backgroundColor: 'blue'}}>
                <View>
                  <Text>1223123</Text>
                </View>
              </TouchableOpacity>
              {
                //밑에서 뜨는 모달로 대체
              }
            </View>
            <View style={{backgroundColor: 'red', flex: 1}}>
              <View></View>
            </View>
          </View>
        </View>
        <View style={box.containers}>
          <View style={box.place}>
            <Text style={font.title}>출발일</Text>
          </View>
          <View style={box.time}>
            <Text>2022년 5월 6일 (금) 04 : 00</Text>
            {/*이거 나중에 state 로 관리
              서버로부터 받아와서 선택한 날짜의 탑승 가능 한 시간을 Picking 해줄예정
            */}
          </View>
          <TouchableOpacity>
            <View style={{alignItems: 'center', borderWidth: 1}}>
              <Icon name="chevron-thin-down" size={20}></Icon>
            </View>
          </TouchableOpacity>
        </View>
        <View style={box.containers}>
          <View style={box.place}>
            <Text style={font.title}>도착 예정 시간</Text>
          </View>
          <View style={box.time}>
            <Text>2022년 5월 6일 (금) 06 : 00</Text>
            {/*이거 나중에 state 로 관리
              출발시간과 가는 시간을 비교. => 거리마다 걸리는 시간을 객체로 나타내 정리
            */}
          </View>
        </View>
        <View style={{width: '90%', height: '8%', marginTop: '10%'}}>
          <CustomButton title="신청"></CustomButton>
        </View>
      </View>
    </>
  );
}

export default BusRequest;
