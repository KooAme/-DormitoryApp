import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SetCommunityItems = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('CommunityDetails');
      }}>
      <View style={styles.item}>
        <View style={{width: '80%'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                marginRight: 10,
                color: 'black',
              }}>
              ㅋㅋ 어제 여친 집 간 썰 품
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
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderTopWidth: 1,
    borderColor: 'navy',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 50,
  },
});

export default SetCommunityItems;
