import { StyleSheet, Text, View,Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ShoppingBag from "../assets/images/shopping-bag.png";
import Bread from "../assets/images/bread.png";
import FastFood from "../assets/images/fast-food.png";
import Deals from "../assets/images/deals.png";
import Coffee from "../assets/images/coffee.png";
import SoftDrink from "../assets/images/soft-drink.png";
import Desserts from "../assets/images/desserts.png";
const items=[
   {
    image:ShoppingBag,
    text:"Pick-up"
   },
   {
    image:SoftDrink,
    text:"Soft Drinks"
   },
   {
    image:Bread,
    text:"Bakery-Items"
   },
   {
    image:FastFood,
    text:"Fast Food"
   },
   {
    image:Deals,
    text:"Deals"
   },{
    image:Coffee,
    text:"Coffee & Tea"
   },
   {
    image:Desserts,
    text:"Desserts"
   }
]

// console.log(items[0].image)

const Categories = () => {
  return (
   <FlatList
   horizontal
   showsHorizontalScrollIndicator={false}
   style={{marginTop:5,backgroundColor:"#fff",paddingVertical:10,paddingLeft:20}}
   data={items}
   renderItem={({item})=>{
    return(
        <View style={{alignItems:"center",marginRight:30}}>
        <Image source={item.image}
        style={{
           width:50,
           height:40,
           resizeMode:"contain"
        }}
        />
        <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
   
        </View>
    )
   }}
   >

   </FlatList>
  )
}

export default Categories

const styles = StyleSheet.create({})