import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';

function OutRequest(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [temp, setTemp] = useState();
  const getDATE = new Date();
  const NOW =
    getDATE.getFullYear() +
    '-0' +
    (getDATE.getMonth() + 1) +
    '-' +
    getDATE.getDate();
  const week = new Array(
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  );
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startDay = week[start.getDay()] || '';
  const endDay = week[end.getDay()] || '';
  /* const testMarking = (startDate, endDate) => {
    let markedDates = {};
    markedDates.[moment(startDate).format('YYYY-MM-DD')] = {
      startingDay: true,
      color: '#50cebb',
      textColor: 'white',
    }
    let i =1
    while (moment(startDate).add(i, 'days').format('YYYY-MM-DD') != endDate) {
      markedDates.moment(startDate).add(i, 'days').format('YYYY-MM-DD') = {
        color : 'blue'
      }
      i++;
    }
    markedDates.moment(endDate) ={
      endingDay: true,
      color: '#50cebb',
      textColor: 'white',
    }
    return testMarking
  };  */
  return (
    <>
      <AppHeader
        navigation={props.navigation}
        title={'외박 예약'}
        isLeft={true}></AppHeader>
      <View style={{flex: 1}}>
        <Calendar
          minDate={NOW}
          onDayPress={day => {
            console.log('selected day', day);
            if (clickCount == 0) {
              setStartDate(day.dateString);
              setClickCount(clickCount + 1);
              setTemp(day.timestamp);
            } else if (clickCount == 1) {
              setClickCount(clickCount + 1);
              console.log(temp + ' ' + day.timestamp);
              if (temp > day.timestamp) {
                setEndDate(startDate);
                setStartDate(day.dateString);
              } else {
                setEndDate(day.dateString);
              }
            } else {
              setStartDate(day.dateString);
              setEndDate('');
              setClickCount(1);
              setTemp(day.timestamp);
            }
          }}
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MM'}
          markingType={'period'}
          markedDates={{
            [startDate]: {
              startingDay: true,
              color: '#50cebb',
              textColor: 'white',
            },

            [endDate]: {
              endingDay: true,
              color: '#50cebb',
              textColor: 'white',
            },
          }}
        />
        <View style={{marginTop: '10%', height: '10%'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              출발일{'  '}
            </Text>
            <TextInput
              style={{
                color: 'black',
                width: '80%',
                borderColor: 'black',
                borderWidth: 2,
              }}
              value={startDate + ' ' + startDay}
              editable={false}></TextInput>
          </View>
        </View>
        <View style={{height: '10%', marginTop: '5%'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              도착일{'  '}
            </Text>
            <TextInput
              style={{
                color: 'black',
                width: '80%',
                borderColor: 'black',
                borderWidth: 2,
              }}
              value={endDate + ' ' + endDay}
              editable={false}></TextInput>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: '10%'}}>
          <View style={{width: '90%', height: '60%'}}>
            <CustomButton title="신청"></CustomButton>
          </View>
        </View>
      </View>
    </>
  );
}

export default OutRequest;
