import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';
function SignUp(props) {
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
            <TextInput style={inputStyle}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>학번</Text>
            <TextInput style={inputStyle}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>이메일</Text>
            <TextInput style={inputStyle}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>비밀번호</Text>
            <TextInput style={inputStyle}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>호실</Text>
            <TextInput style={inputStyle}></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              marginBottom: '3%',
            }}>
            <Text style={{marginTop: '3%'}}>전화번호</Text>
            <TextInput style={inputStyle}></TextInput>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          width: '100%',
          height: '10%',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10%',
        }}>
        <View style={{width: '80%', height: '100%'}}>
          <CustomButton title="회원가입"></CustomButton>
        </View>
      </View>
    </>
  );
}
export default SignUp;
