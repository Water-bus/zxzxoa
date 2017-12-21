import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,Button,StatusBar,Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from '../components/icon';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default class Work extends Component {
  static navigationOptions = {
    headerTitle: '工作',
    headerStyle:{
      backgroundColor:'#cc0000',
    },
    headerTitleStyle:{
      color:'white',
      alignSelf:'center',
    },
    headerLeft:null,
  };
    constructor(props){
         super(props);
     }
    render() {
      return (
        <View style={styles.rootView}>
            <StatusBar backgroundColor="#cc0000" barStyle="light-content"/>
            <View style={styles.body1}>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../img/wf1.png')} />
                    <Text style={styles.text}>待办事项</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../img/wf2.png')} />
                    <Text style={styles.text}>我发起的</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../img/wf3.png')} />
                    <Text style={styles.text}>抄送我的</Text>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} source={require('../img/wf4.png')} />
                    <Text style={styles.text}>已办事项</Text>
                </View>
            </View>
            <View style={styles.body2}>
                <Text style={styles.title}>常用应用</Text>
                <View style={styles.item2}>
                    <Image style={styles.image2} source={require('../img/kq.png')} />
                    <Text style={styles.text}>考勤管理</Text>
                </View>
                <View style={styles.item2}>
                    <Image style={styles.image2} source={require('../img/xz.png')} />
                    <Text style={styles.text}>行政管理</Text>
                </View>
                <View style={styles.item2}>
                    <Image style={styles.image2} source={require('../img/cg.png')} />
                    <Text style={styles.text}>采购管理</Text>
                </View>
                <View style={styles.item2}>
                    <Image style={styles.image2} source={require('../img/gw.png')} />
                    <Text style={styles.text}>公文管理</Text>
                </View>
            </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    rootView:{
          width:'100%',
          height:'100%',
          backgroundColor:'#E9E9EF'
    },
    body1:{
      width:'100%',
      backgroundColor: '#fff',
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:8,
    },
    body2:{
      width:'100%',
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: '#fff',
    },
    image:{
          width:width*0.25*0.4,
          marginLeft:width*0.25*0.3,
          height:width*0.25*0.4,
          marginVertical:10,
    },
    image2:{
          width:width*0.5*0.2,
          marginLeft:width*0.5*0.4,
          height:width*0.5*0.2,
          marginVertical:20,
    },
    item: {
      width:'25%',
      paddingVertical:9,
    },
    item2: {
      width:'50%',
      paddingVertical:5,
      borderColor:'#CCCCCC',
      borderWidth:1
    },
    text:{
    color:'#999999',
    fontSize:12,
    fontWeight:'600',
    textAlign:'center'
    },
    title:{
      fontSize:15,
      width:'100%',
      fontWeight:'600',
      marginVertical:11,
      marginLeft:10,
      color:'#666699'
    }
  })
