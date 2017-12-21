import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import AppTabNav from './app/appTabNav'
import loginScreen from './app/views/login'


const appRootStackNav = StackNavigator({
	Home: {
		screen: AppTabNav
	},
	Login: {//登录
		screen: loginScreen
	},
}, {
})

export default appRootStackNav
