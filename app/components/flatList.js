import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasics extends Component {
  constructor(props){
       super(props);
       this.state={
         data:this.props.data,
       }
   }
  componentWillReceiveProps(nextProps) {
     this.setState({
         data:nextProps.data
     })
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth:1,
    borderColor:'#C3D1D5',
    fontSize: 18,
    height: 44,
  },
})
