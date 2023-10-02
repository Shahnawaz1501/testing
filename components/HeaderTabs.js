import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = ({activeTab,setActiveTab}) => {
    
  return (
    <View style={{flexDirection:"row",alignSelf:"center"}}>
      {/* HeaderButton */}
      <HeaderButton text={"Delivery"} btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text={"Restaurant_Reservation"} btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

export default HeaderTabs

const styles = StyleSheet.create({})

const HeaderButton=({text,btnColor,textColor,activeTab,setActiveTab})=>{
    return(
       
           <TouchableOpacity style={{backgroundColor:activeTab===text?"black":"white",paddingVertical:6,paddingHorizontal:16,borderRadius:30}} onPress={()=>setActiveTab(text)}>
           <Text style={{color:activeTab===text?"white":"black",fontSize:15,fontWeight:"900"}}>{text}</Text>
           </TouchableOpacity>
      
    )
}