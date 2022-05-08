import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
  Button,
} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function SignIn(props) {
  const [stdNum, setStdNum] = useState('');
  const [password, setPassword] = useState('');
  const inputStyle = {
    marginTop: '5%',
    marginBottom: '2%',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '80%',
    borderRadius: 10,
  };
  const login = () => {
    axios
      .post('http://192.168.0.14:3001/user/login', {
        username: stdNum,
        password,
      })
      .then(async res => {
        try {
          console.log(res);
          /*  await AsyncStorage.setItem('login_info', res.data);
          await AsyncStorage.setItem('sessionId', res.headers['set-cookie']); */
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => console.trace(err));
  };
  const logout = () => {
    axios
      .post('http://192.168.0.14:3001/user/logout')
      .then(res => console.log(res));
  };
  /*   const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  }; */
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'Sign In'}
        isLeft={true}></AppHeader>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={inputStyle}
          placeholder="학번"
          value={stdNum}
          onChangeText={text => setStdNum(text)}></TextInput>
        <TextInput
          style={inputStyle}
          placeholder="비밀번호"
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>
        <View
          style={{
            width: '80%',
            height: '12%',
            margin: '5%',
          }}>
          <CustomButton
            onPress={() => {
              login();
              /* props.navigation.reset({index: 0, routes: [{name: 'Home'}]}); */
            }}
            title="로그인"></CustomButton>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            borderTopWidth: 1,
          }}>
          <TouchableNativeFeedback
            onPress={() => {
              logout();
            }}>
            <Text style={{marginTop: '2%'}}>로그아웃</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Text style={{marginTop: '2%'}}>비밀번호 찾기</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}>
            <Text style={{marginTop: '2%'}}>회원가입</Text>
          </TouchableNativeFeedback>
          <Text></Text>
        </View>
      </View>
    </>
  );
}
export default SignIn;
