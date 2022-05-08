import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';
import axios from 'axios';
function SignUp(props) {
  const [std_id, setStd_Id] = useState();
  const [std_name, setStd_Name] = useState();
  const [password, setPassword] = useState();
  const [ph_num, setPh_Num] = useState();
  const [room_num, setRoom_Num] = useState();
  const [e_mail, setE_Mail] = useState();
  const SignIn = () => {
    console.log(std_id, std_name, password, ph_num, room_num, e_mail);
    if (
      std_id === undefined ||
      std_name === undefined ||
      password === undefined ||
      ph_num === undefined ||
      room_num === undefined ||
      e_mail === undefined
    ) {
      alert('형 다시 입력해요..');
    } else {
      /*    axios
        .post('http://localhost:3001/user/login', {
          std_id,
          std_name,
          password,
          ph_num,
          room_num,
          e_mail,
        })
        .then(res => console.log(res)); */
    }
  };

  const inputStyle = {
    width: '90%',
    height: '60%',
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    elevation: 5,
    padding: 0,
    margin: 0,
  };
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'회원가입'}
        isLeft={true}></AppHeader>
      <KeyboardAwareScrollView>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>이름</Text>
            <TextInput
              style={inputStyle}
              value={std_name}
              onChangeText={text => setStd_Name(text)}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>학번</Text>
            <TextInput
              style={inputStyle}
              value={std_id}
              onChangeText={text => setStd_Id(text)}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>이메일</Text>
            <TextInput
              style={inputStyle}
              value={e_mail}
              onChangeText={text => setE_Mail(text)}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>비밀번호</Text>
            <TextInput
              style={inputStyle}
              value={password}
              onChangeText={text => setPassword(text)}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>호실</Text>
            <TextInput
              style={inputStyle}
              value={room_num}
              onChangeText={text => setRoom_Num(text)}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>전화번호</Text>
            <TextInput
              style={inputStyle}
              value={ph_num}
              onChangeText={text => setPh_Num(text)}></TextInput>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10%',
        }}>
        <View style={{width: '80%', height: '100%'}}>
          <CustomButton
            title="회원가입"
            onPress={() => SignIn()}></CustomButton>
        </View>
      </View>
    </>
  );
}
export default SignUp;
