import { ScrollView, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'
import { localRestaurants } from '../components/RestaurantItem'

const YELP_API_KEY =
  "QL0JBZqUkeoFvKXQNo9AIqC4ytH8_2eeSTvwzUH5WkmAC_qTSmEhnktOCy529ee9IoyydoswT5nN6SkLLWlvhJJtU0Cla23wajbpq-SEMbIcJGE-PK9fxXYcrMoXZXYx";


const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setCity] = useState("Hollywood");
    const [activeTab,setActiveTab]=useState("Delivery")
    // console.log(city)
    // console.log(activeTab)

    const getRestaurntFromYelp=async ()=>{
        const yelpurl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        const apiOptions={
            headers:{
                 Authorization:`Bearer ${YELP_API_KEY}`                  
            }
        }
        const res = await fetch(yelpurl, apiOptions)
        const data = await res.json()
      let resu=data.businesses?.filter((business)=>business.transactions.includes(activeTab.toLowerCase()))
      setRestaurantData(resu)
    }
    const getRestaurntFromYelpDefault=async ()=>{
        const yelpurl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`
        const apiOptions={
            headers:{
                 Authorization:`Bearer ${YELP_API_KEY}`                  
            }
        }
        const res = await fetch(yelpurl, apiOptions)
        const data = await res.json()
    
        let resu=data.businesses?.filter((business)=>business.transactions.includes(activeTab.toLowerCase()))
        setRestaurantData(resu)
           
    }

    useEffect(()=>{
       
           city===""? getRestaurntFromYelpDefault():getRestaurntFromYelp();
    },[city,activeTab])

    // console.log(restaurantData)

  return (
    <View>
        <View style={{backgroundColor:"white",padding:15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
        </View>
       {/* <ScrollView showsVerticalScrollIndicator={false}> */}
       <Categories/>
        {
            restaurantData?.length===0?<ActivityIndicator/>:<RestaurantItem
            restaurantData={restaurantData}
           />
        }
       {/* </ScrollView> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})