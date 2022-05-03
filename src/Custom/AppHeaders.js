import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const LeftIcon = props => {
  //LeftIcon 의 유물르 결정하는 함수
  if (props.isLeft) {
    return (
      <TouchableOpacity
        onPress={() => {
          setTimeout(() => {
            props.navigation.goBack();
          });
        }}>
        <View style={{height: '100%', justifyContent: 'center'}}>
          <Image
            style={{height: '60%', width: 30}}
            source={require('../public/leftYazirusi.png')}></Image>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <></>;
  }
};

const AppHeader = props => {
  return (
    <View
      style={{
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        elevation: 3,
      }}>
      <LeftIcon isLeft={props.isLeft} navigation={props.navigation}></LeftIcon>
      <View
        style={{height: '100%', justifyContent: 'center', marginLeft: '7%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {props.title}
        </Text>
      </View>
      {
        //setTimeout안에서 사이드바를 열어주지 않으면 중복 오류 발생 가능성 있음.
      }
      <TouchableOpacity
        onPress={() => {
          setTimeout(() => {
            props.navigation.openDrawer();
          }, 300);
        }}>
        <View
          style={{height: '100%', justifyContent: 'center', marginRight: '7%'}}>
          <Image source={require('../public/menuIcon.png')}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AppHeader;
