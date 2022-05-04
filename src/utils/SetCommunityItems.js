import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SetCommunityItems = ({title}) => (
  <View style={styles.item}>
    <View style={{width: '80%'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 10}}>
          제목입니다
        </Text>
        <Text style={{color: 'red'}}>(20) </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{paddingRight: 10}}>2022-05-04</Text>
        <Text>조회수 : 1023</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
      }}>
      <Text>12</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 50,
  },
});

export default SetCommunityItems;
