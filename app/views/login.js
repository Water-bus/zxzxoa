import React, {Component} from 'react'
import {View, Text,TouchableOpacity, StyleSheet, Image,BackHandler,ToastAndroid,StatusBar,KeyboardAvoidingView } from 'react-native';
import Input from '../components/input';

var firstClick = 0;
export default class loginScreen extends React.Component {
  constructor(props){
      super(props);
  }
  static navigationOptions = {
    headerTitle: '登陆',
    headerStyle:{
      backgroundColor:'#cc0000',
    },
    headerTitleStyle:{
      color:'white',
      alignSelf:'center',
    },
    headerLeft:null,
  };
  // componentDidMount() {
  //       BackHandler.addEventListener('hardwareBackPress', this.handleBack)
  //   }
  //
  //   componentWillUnmount() {
  //       BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  //   }

    handleBack = () => {
        var timestamp = (new Date()).valueOf();
        if (timestamp - firstClick > 2000) {
            firstClick = timestamp;
            ToastAndroid.show('请先登录,再按一次退出', ToastAndroid.SHORT);
            return true;
        } else {
            BackHandler.exitApp()
            return false;
        }

    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.rootView}>
        <StatusBar backgroundColor="#cc0000" barStyle="light-content"/>
        <Image style={styles.imgLogo}  source={require('../img/icon.png')} />
        <View style={styles.inputsView}>
					<Input iconLeft='mobile' placeholder='请输入手机号码' onChangeText={account => this.setState({account})}/>
					<Input iconLeft='lock' type='password' placeholder='请输入密码6-16位'
						   onChangeText={psw => this.setState({psw})}/>
				</View>
        <TouchableOpacity style={styles.btnSubmit} onPress={() => this.loginFun()}>
					<Text style={styles.btnText}>登录</Text>
				</TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  rootView: {
		flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
		height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
		backgroundColor: '#fff',
	},
  imgLogo:{
    marginTop:'20%',
  },
  btnSubmit: {
		width: '80%',
		borderRadius: 2,
		backgroundColor: '#e82325',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20
	},
	btnText: {
		fontSize: 20,
		color: '#fff',
		lineHeight: 20
	},
  inputsView: {
		width: '80%'
	},
})
