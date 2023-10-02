import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  Screen,
} from "@react-navigation/native-stack";
import RestaurantDetail from "./screens/RestaurantDetail";
import BottomTab from "./screens/BottomTab";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ paddingTop: 30, backgroundColor: "#eee", flex: 1 }}>
      <NavigationContainer>
      <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Navigator>
         
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
