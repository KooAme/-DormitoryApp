import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppHeader from '../Custom/AppHeaders';
import Comment from './Comment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
    id: 1,
    title: 1,
  },
  {
    id: 2,
    title: 2,
  },
  {
    id: 3,
    title: 3,
  },
  {
    id: 4,
    title: 4,
  },
];
function Details(props) {
  const [commnetValue, setCommentValue] = useState();
  const renderItem = ({item}) => (
    <Comment title={item.title} navigation={props.navigation} />
  );
  return (
    <>
      <AppHeader
        title="익명게시판"
        isLeft={true}
        navigation={props.navigation}></AppHeader>
      <View style={{flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  marginBottom: '5%',
                  paddingLeft: '3%',
                  padding: 5,
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '400',
                      marginRight: 10,
                      color: 'black',
                      marginBottom: '2%',
                    }}>
                    ㅋㅋ 어제 여친 집 간 썰 품
                  </Text>
                  <View style={{flexDirection: 'row', marginRight: '5%'}}>
                    <TouchableOpacity style={{marginRight: 10}}>
                      <Text>삭제</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>수정</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginRight: 10}}>조회 :200</Text>
                  <Text style={{marginRight: 10}}>추천 :561</Text>
                  <Text>2022-05-04</Text>
                </View>
              </View>
              <Text style={{marginLeft: 10}}>
                Component that wraps platform ScrollView while providing
                integration with touch locking "responder" system. Keep in mind
                that ScrollViews must have a bounded height in order to work,
                since they contain unbounded-height children into a bounded
                container (via a scroll interaction). In order to bound the
                height of a ScrollView, either set the height of the view
                directly (discouraged) or make sure all parent views have
                bounded height. Forgetting to transfer down the view stack can
                lead to errors here, which the element inspector makes quick to
                debug. a bounded container (via a scroll interaction). In order
                to bound the height of a ScrollView, either set the height of
                the view directly (discouraged) or make sure all parent views
                have bounded height. Forgetting to transfer down the view stack
                can lead to errors here, which the element inspector makes quick
                to debug. Doesn't yet support other contained responders from
                blocking this scroll view from becoming the responder.Component
                that wraps platform ScrollView while providing integration with
                touch locking "responder" system. Keep in mind that ScrollViews
                must have a bounded height in order to work, since they contain
                unbounded-height children into Doesn't yet support other
                contained responders from blocking this scroll view from
                becoming the responder
              </Text>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '20%',
                    borderWidth: 1,
                    padding: 10,
                    alignItems: 'center',
                    margin: '5%',
                  }}>
                  <MaterialCommunityIcons
                    name="fire"
                    size={15}></MaterialCommunityIcons>
                  <Text>0</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{flex: 1, flexDirection: 'row', marginBottom: '10%'}}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    width: '80%',
                  }}
                  value={commnetValue}
                  onChangeText={text => {
                    setCommentValue(text);
                  }}
                  multiline={true}></TextInput>
                <TouchableOpacity
                  style={{
                    width: '20%',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>댓글 생성</Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: 'black', fontSize: 20, margin: '2%'}}>
                댓글 3개
              </Text>
            </View>
          }
        />
      </View>
    </>
  );
}

export default Details;
