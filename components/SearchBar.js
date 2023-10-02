import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
const SearchBar = (props) => {

  return (
    <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
    <TextInput
      onChangeText={(text) => props.cityHandler(text)}
      placeholder='Search'
      style={{
        backgroundColor: '#eee',
        borderRadius: 20,
        fontWeight: '700',
        marginTop: 7,
        flex: 1, // Take up remaining space
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        paddingLeft: 40, // Add left padding for the icon
        paddingRight:80
      }}
    />
    <Ionicons name='location-sharp' size={24} style={{ position: 'absolute', marginLeft: 10, marginTop: 15,top:5,left:5 }} />
    <View style={{ flexDirection: 'row', marginRight: 8, backgroundColor: 'white', padding: 9, borderRadius: 30, alignItems: 'center',position: 'absolute',left:280,top:13 }}>
      <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
      <Text>Search</Text>
    </View>
  </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})