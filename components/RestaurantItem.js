import { StyleSheet, Text, View,Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
  


const RestaurantItem = ({restaurantData}) => {
        // console.log("Data",restaurantData.businesses)
  return (
   <FlatList
   data={restaurantData}
   renderItem={({item})=>{
    return(
        <TouchableOpacity activeOpacity={1} style={{marginBottom:5}} onPress={()=>{console.log(item.name)}}>
        <View style={{marginTop:10,padding:15,backgroundColor:"white"}}>
      <RestaurantImage image_url={item.image_url}/>
      <RestaurantInfo name={item.name} rating={item.rating}/>
    </View>
    </TouchableOpacity>
    )
   }}
   />
  )
}

export default RestaurantItem

const styles = StyleSheet.create({})

const RestaurantImage=({image_url})=>{
    return(
     <>
        <Image source={{uri:image_url}}
    style={{
        width:"100%",
        height:180
       
    }}
    />
    <TouchableOpacity style={{position:"absolute",right:20,top:20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff"/>
    </TouchableOpacity>
     </>
    )
}

const RestaurantInfo=({name,rating})=>{
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
            <View style={{flexDirection:"column"}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{name}</Text>
            <Text style={{fontSize:13,color:"gray"}}>30-45  min</Text>
            </View>
            <View style={{backgroundColor:"#eee",height:30,width:30,borderRadius:15,justifyContent:"center",alignItems:"center"}}>
            <Text >{rating}</Text>
            </View>
            
        </View>
    )
}