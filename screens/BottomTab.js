import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
// import Orders from './screens/Orders';
import Account from './screens/Account';
import Grocery from './screens/Grocery';
import Browse from './screens/Browse';
import Home from './screens/Home';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
const Tab=createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{headerShown:false,tabBarIcon:({color,size})=>(
            <FontAwesome5 name='home' color={color} size={size}/>
        )}}/>
        <Tab.Screen name='Browse' component={Browse} options={{headerShown:false,tabBarIcon:({color,size})=>(
          <FontAwesome5 name='search' color={color} size={size}/>
        )}} />
        <Tab.Screen name='Grocery' component={Grocery} options={{headerShown:false,tabBarIcon:({color,size})=>(
          <FontAwesome5 name='shopping-bag' color={color} size={size}/>
        )}} />
        <Tab.Screen name='Orders' component={Orders} options={{headerShown:false,tabBarIcon:({color,size})=>(
          <FontAwesome5 name='receipt' color={color} size={size}/>
        )}} />
        <Tab.Screen name='Account' component={Account} options={{headerShown:false,tabBarIcon:({color,size})=>(
          <FontAwesome5 name='user' color={color} size={size}/>
        )}} />
        </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})