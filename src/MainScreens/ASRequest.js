import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';

function ASRequest(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSelected, setSelection] = useState(false);
  return (
    <>
      <AppHeader
        isLeft={true}
        title="AS 예약"
        navigation={props.navigation}></AppHeader>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: '10%',
            width: '90%',
            margin: '5%',
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>제목</Text>
          <TextInput
            style={{borderWidth: 1, padding: 0, margin: 0, height: '80%'}}
            value={title}
            onChangeText={text => {
              setTitle(text);
            }}
            maxLength={50}></TextInput>
        </View>

        <View
          style={{
            height: '60%',
            width: '90%',
          }}>
          <Text
            style={{fontWeight: 'bold', color: 'black', padding: 0, margin: 0}}>
            내용
          </Text>
          <TextInput
            style={{borderWidth: 1, height: '90%'}}
            value={content}
            onChangeText={text => {
              setContent(text);
              console.log(content);
            }}
            maxLength={500}></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '7%',
          }}>
          <CheckBox
            value={isSelected}
            onValueChange={() => setSelection(!isSelected)}></CheckBox>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            부재 시 방문 동의
          </Text>
        </View>
        <View style={{height: '7%', width: '90%'}}>
          <CustomButton title="신청"></CustomButton>
        </View>
      </View>
    </>
  );
}
export default ASRequest;
