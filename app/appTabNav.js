import React, {Component} from 'react'
import { Image, StyleSheet } from 'react-native'
import {TabNavigator,TabBarBottom} from 'react-navigation'

import loginScreen from './views/login'
import home from './views/home'
import MyChatNavigator from './views/minePage'
import phoneBook from './views/phoneBook'
import Work from './views/work'

const AppTabNav = TabNavigator({
    Home: {
        screen: home,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor})=><Image style={styles.tabIcon} source={focused?require('./img/fnav1.png'):require('./img/nav1.png')}/>
        }
    },
    work: {
        screen: Work,
        navigationOptions:{
            tabBarLabel:'工作',
            tabBarIcon:({focused,tintColor})=><Image style={styles.tabIcon} source={focused?require('./img/fnav2.png'):require('./img/nav2.png')}/>,
            tabBarComponent:''
        }
    },
    phone: {
        screen: phoneBook,
        navigationOptions:{
            tabBarLabel:'通讯录',
            tabBarIcon:({focused,tintColor})=><Image style={styles.tabIcon} source={focused?require('./img/fnav3.png'):require('./img/nav3.png')}/>
        }
    },
    Me: {
        screen: MyChatNavigator,
        navigationOptions:{
            tabBarLabel:'我',
            tabBarIcon:({focused,tintColor})=><Image style={styles.tabIcon} source={focused?require('./img/fnav4.png'):require('./img/nav4.png')}/>,
            tabBarComponent:''
        }
    }
},{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#e71f19',
        inactiveTintColor: '#8b7272',
        labelStyle:{
            marginBottom:6
        }
    }
})

const styles = StyleSheet.create({
    tabIcon:{
        width:24,
        height:24
    }
})

export default AppTabNav
