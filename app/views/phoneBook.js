import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,Button,DeviceEventEmitter } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SearchInput from '../components/search'
import FlatListBasics from '../components/flatList'
var data = [
 {key: 'Devin'},
 {key: 'Jackson'},
 {key: 'James'},
 {key: 'Joel'},
 {key: 'John'},
 {key: 'Jillian'},
 {key: 'Jimmy'},
 {key: 'Julie'},
]
export default class phoneBook extends Component {
  static navigationOptions = {
    headerTitle: '通讯录',
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
       this.state={
           data:data,
           search:''
       }
   }
  componentDidMount() {
        //注意addListener的key和emit的key保持一致
        this.msgListener = DeviceEventEmitter.addListener('searchText',(searchText) => {
            console.log(searchText)
            var data2=[
             {key: 'Devin'},
             {key: 'Jackson'},
             {key: 'James'},
             {key: 'Joel'},
             {key: 'John'},
             {key: 'Jillian'},
             {key: 'Jimmy'},]
            var arr=[];
            for(var i=0;i<this.state.data.length;i++){
              console.log(this.state.data[i].key.indexOf(searchText))
              if(this.state.data[i].key.indexOf(searchText)>=0){
                arr.push(this.state.data[i])
              }
            }
            console.log(arr)
            this.setState({
                data:arr,
                search:searchText
            })
            console.log(this.state.data)
        });

    }

    componentWillUnmount() {
        //此生命周期内，去掉监听
        this.msgListener&&this.msgListener.remove();
    }
  submbitFun(){
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{this.state.search}</Text>
        <SearchInput />
        <FlatListBasics data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#fff',
   flex: 1,
   paddingTop: 12
  },
  item: {
    padding: 10,
    borderWidth:1,
    borderColor:'#C3D1D5',
    fontSize: 18,
    height: 44,
  },
})
