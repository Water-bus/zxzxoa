import React, {Component} from 'react'
import {View, Text,FlatList, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Notice extends Component {
  constructor(props){
       super(props);
       this.state={
         title:'我是通知公告一',
         body:'有采购申请巴拉巴拉',
         time:'2017-9-27 14:35'
       }
   }
  componentWillMount() {
     this.setState({
         data1:'关于公司考勤制度规定一',
     })
  }
  render() {
    return (
      <View onPress={()=>this.props.navigate('Login')} style={styles.rootView}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.item}>{this.state.body}</Text>
        <Text style={styles.item}>发布时间：{this.state.time}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootView:{
    width:'100%',
    paddingLeft:'4%',
    backgroundColor:'#E4F2F6',
    borderBottomColor:'#C3D1D5',
    borderBottomWidth:1
  },
  title:{
    width:'100%',
    fontSize:17,
    fontWeight:'600',
    color:'#000',
    marginVertical:12
  },
  item: {
    width:'100%',
    textAlign:'left',
    marginBottom:12,
    fontWeight:'600',
    color:'#A0AFB3',
    fontSize:13,
  },
})
