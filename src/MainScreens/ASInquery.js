import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import CustomButton from '../Custom/CustomButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
function ASInquery(props) {
  /*@params isStartDatePickerVisible  : 언제부터 조회할 지 확인해주는 달력의 화면 출력을 명시
    @parmas isEndDatePickerVisible : 언제까지 조회할 지 확인해주는 달력의 화면 출력을 명시
    @params startDate  : 시작 날짜의 value
    @params endDate    : 끝 날짜의 value
    warning ! moment로 날짜를 문자형식으로 formatting 한후 가 아니면 error발생 Type Error
  */

  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const titles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  const details = StyleSheet.create({
    innerbox: {
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    font: {
      fontWeight: 'bold',
      color: 'black',
    },
  });
  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };
  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };
  const handleStartConfirm = date => {
    setStartDate(moment(date).format('YYYY년          MM월          DD일'));
    hideStartDatePicker();
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };
  const handleEndConfirm = date => {
    setEndDate(moment(date).format('YYYY년          MM월          DD일'));
    hideDatePicker();
  };
  return (
    <>
      <AppHeader
        isLeft={true}
        title="AS 조회"
        navigation={props.navigation}></AppHeader>
      <View
        style={{
          height: '90%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            height: '10%',
            borderWidth: 1,
            marginTop: '5%',
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '80%',
              flexDirection: 'column',
            }}>
            <View style={titles.container}>
              <TouchableOpacity
                style={titles.container}
                onPress={showStartDatePicker}>
                <View style={{width: '80%'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {startDate
                      ? startDate
                      : '          년          월          일'}
                  </Text>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isStartDatePickerVisible}
                mode="date"
                locale="ko_KR"
                onConfirm={handleStartConfirm}
                onCancel={hideStartDatePicker}
              />
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>~</Text>
            </View>
            <View style={titles.container}>
              <TouchableOpacity
                style={titles.container}
                onPress={showEndDatePicker}>
                <View style={{width: '80%'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {endDate ? endDate : '          년          월          일'}
                  </Text>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isEndDatePickerVisible}
                mode="date"
                locale="ko_KR"
                onConfirm={handleEndConfirm}
                onCancel={hideEndDatePicker}
              />
            </View>
          </View>
          <View style={{width: '20%'}}>
            <CustomButton
              title="조회"
              onPress={() => alert('sex')}
              textColor="black"
              color="rgba(0, 0, 0, 0)"></CustomButton>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: '80%',
            borderWidth: 1,
            marginTop: '1%',
            borderRadius: 15,
          }}>
          <View
            style={{flexDirection: 'row', marginTop: '5%', marginBottom: '5%'}}>
            <View style={details.innerbox}>
              <Text style={details.font}>날짜</Text>
            </View>
            <View style={details.innerbox}>
              <Text style={details.font}>시간</Text>
            </View>
            <View style={details.innerbox}>
              <Text style={details.font}>상태</Text>
            </View>
            <View style={details.innerbox}>
              <Text style={details.font}></Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default ASInquery;
