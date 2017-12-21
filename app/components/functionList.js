import React, {Component} from 'react'
import {View, Text,FlatList,Image,StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation'
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default class Functionlist extends Component {
  constructor(props){
       super(props);
   }
  render() {
    return (
      <View style={styles.rootView}>
          <View style={styles.item}>
              <Image style={styles.image} source={require('../img/fl1.png')} />
              <Text style={styles.text}>考勤打卡</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.image} source={require('../img/fl2.png')} />
              <Text style={styles.text}>签到</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.image} source={require('../img/fl7.png')} />
              <Text style={styles.text}>知识库</Text>
          </View>
          <View style={styles.item}>
              <Image style={styles.image} source={require('../img/fl8.png')} />
              <Text style={styles.text}>消息箱子</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootView:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
  },
  image:{
        width:width*0.25*0.4,
        marginLeft:width*0.25*0.3,
        height:width*0.25*0.4,
        marginBottom:8
  },
  item: {
    width:'25%',
    paddingVertical:9,
  },
  text:{
  color:'#999999',
  fontSize:12,
  textAlign:'center'
}
})
