import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Custom/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Main(props) {
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'익명 게시판'}
        type={'community'}></AppHeader>
      <View style={{height: '10%', width: '100%'}}>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '5%'}}>
            전체
          </Text>
          {
            //state로 Mode 조정 예정
          }
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity style={{marginRight: '7%'}}>
              <Icon name="bells" size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: '7%'}}>
              <Icon name="edit" size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: '7%'}}>
              <Icon name="search1" size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        {
          //Title and alarms and search, write
        }
      </View>
      {/*  <View
          style={{
            flexDirection: 'row',
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}>
          <View style={{marginLeft: '5%'}}>
            <CustomButton
              title="전체"
              color="rgba(0,0,0,0)"
              textColor="black"></CustomButton>
          </View>
          <View style={{marginLeft: '5%'}}>
            <CustomButton
              title="HOT"
              color="rgba(0,0,0,0)"
              textColor="black"
              icon={() => (
                <MaterialCommunityIcons
                  name="fire"
                  size={15}></MaterialCommunityIcons>
              )}></CustomButton>
          </View>
        </View> */}
    </>
  );
}
export default Main;
