import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Custom/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SetCommunityItems from '../utils/SetCommunityItems';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5894a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
  },
  {
    id: '5860f-3da1-471f-bd96-145571e29',
    title: 'Third Item',
  },
  {
    id: '8694a0f-3da1-471f=5571e2',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5894a0f-3da1-4716-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694-3a1-4=45571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869-3da-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a-3dd96-145571e29d72',
    title: 'Third Item',
  },
];

function Main(props) {
  const [noticeMode, setNoticeMode] = useState('ALL');
  const renderItem = ({item}) => (
    <SetCommunityItems title={item.title} navigation={props.navigation} />
  );
  const noticeModeChanger = mode => {
    if (mode === 'ALL') {
      return (
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '5%'}}>
          전체
        </Text>
      );
    } else if (mode === '공지사항') {
      return (
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '5%'}}>
          공지사항
        </Text>
      );
    } else if (mode === 'HOT') {
      return (
        <View style={{flexDirection: 'row', marginLeft: '3%'}}>
          <MaterialCommunityIcons
            name="fire"
            size={30}></MaterialCommunityIcons>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>HOT</Text>
        </View>
      );
    }
  };
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'익명 게시판'}
        type={'community'}></AppHeader>
      <View style={{height: '7%', width: '100%'}}>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {noticeModeChanger(noticeMode)}
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
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              backgroundColor: 'white',
            }}>
            <View style={{marginLeft: '5%'}}>
              <CustomButton
                onPress={() => {
                  setNoticeMode('ALL');
                }}
                title="전체"
                color="rgba(0,0,0,0)"
                textColor="black"></CustomButton>
            </View>
            <View style={{marginLeft: '5%'}}>
              <CustomButton
                onPress={() => {
                  setNoticeMode('HOT');
                }}
                title="HOT"
                color="rgba(0,0,0,0)"
                textColor="black"
                icon={() => (
                  <MaterialCommunityIcons
                    name="fire"
                    size={15}></MaterialCommunityIcons>
                )}></CustomButton>
            </View>
            <View style={{marginLeft: '5%'}}>
              <CustomButton
                onPress={() => {
                  setNoticeMode('공지사항');
                }}
                title="공지사항"
                color="rgba(0,0,0,0)"
                textColor="black"></CustomButton>
            </View>
          </View>
        }
      />
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
