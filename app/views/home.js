import React, {Component} from 'react'
import {View,ScrollView ,FlatList, Text, StyleSheet, Image,BackHandler,StatusBar, } from 'react-native';
import Input from '../components/input';
import Icon from '../components/icon';
import Notice from '../components/notice';
import Functionlist from '../components/functionList';
import {StackNavigator} from 'react-navigation'

var firstClick = 0;
export default class home extends React.Component {
  constructor(props){
      super(props);
  }
  inputNotice() {
		return (
			<TextInput style={[styles.inputStyle, {width: (this.props.type) ? '70%' : '90%'}]}
			           {...this.props}
			           placeholder={this.props.placeholder}
			           underlineColorAndroid='transparent'
			           placeholderTextColor='#777'
			           secureTextEntry={this.state.seePsw}
					   autoCapitalize='none'
					   autoCorrect={false}
			>
			</TextInput>
		)
	}
  static navigationOptions = {
    headerTitle: '中消在线·OA',
    headerStyle:{
      backgroundColor:'#cc0000',
    },
    headerTitleStyle:{
      color:'white',
      alignSelf:'center',
    },
    headerLeft:null,
  };
  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }

    handleBack = () => {
        var timestamp = (new Date()).valueOf();
        if (timestamp - firstClick > 2000) {
            firstClick = timestamp;
            ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
            return true;
        } else {
            BackHandler.exitApp()
            return false;
        }
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.rootView}>
            <StatusBar backgroundColor="#cc0000" barStyle="light-content"/>
            <Image style={styles.imgHead}  source={require('../img/homeHead.png')} />
            <View style={styles.body2}>
                <Functionlist navigate={navigate}/>
            </View>
            <View style={styles.body1}>
                <Text style={styles.title}>通知公告<Icon name={'chevron-right'} size={18} color='#999999'/></Text>
                <Notice navigat={navigate} title={navigate} body={navigate} time={navigate}/>
                <Notice navigat={navigate} title={navigate} body={navigate} time={navigate}/>
                <Notice navigat={navigate} title={navigate} body={navigate} time={navigate}/>
                <Notice navigat={navigate} title={navigate} body={navigate} time={navigate}/>
            </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  rootView: {
		height: '100%',
    width:'100%',
		backgroundColor: '#EEEEEE',
	},
  imgHead:{
    width:'100%',
    marginTop:0,
    justifyContent:'center',
  },
  body1:{
    width:'100%',
    backgroundColor: '#fff',
  },
  body2:{
    width:'100%',
    height:75,
    marginBottom:6,
    backgroundColor: '#fff',
  },
  title:{
    fontSize:18,
    width:'100%',
    paddingVertical:8,
    borderColor:'#cccccc',
    color:'#999999',
    paddingLeft:'4%',
    justifyContent:'center',
    borderBottomColor:'#C3D1D5',
    borderBottomWidth:1
  }
})
